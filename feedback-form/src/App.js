import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FormList from './components/FormList';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';

const App = () => {
  const [forms, setForms] = useState([]);
  const [showButton, setShowButton] = useState(true);  // Ensure this line is present
  const navigate = useNavigate();

  const handleAddForm = () => {
    navigate('/feedback/new'); // Navigate to the new feedback form route
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  return (
    <div className="App">
      <h1>User Feedback Form</h1>
      {showButton && <button onClick={handleAddForm}>Click Here</button>} {/* Step 2: Conditionally render the button */}
      <Routes>
        <Route path="/" element={<FormList forms={forms} onDelete={handleDeleteForm} />} />
        <Route path="/feedback/new" element={<FeedbackForm />} />
        <Route path="/feedback/:id" element={<FeedbackForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;