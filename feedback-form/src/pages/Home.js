import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for button state
    const buttonState = localStorage.getItem('buttonClicked') === 'true';
    setIsButtonClicked(buttonState);
  }, []);

  const handleGetStarted = () => {
    setIsButtonClicked(true);
    localStorage.setItem('buttonClicked', 'true');
    navigate('/feedback');
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Feedback System
      </Typography>
      <Typography variant="h6" gutterBottom>
        We value your feedback and strive to improve our services based on your suggestions.
      </Typography>
      {!isButtonClicked && (
        <Button variant="contained" color="primary" onClick={handleGetStarted}>
          Get Started
        </Button>
      )}
    </Container>
  );
};

export default Home;