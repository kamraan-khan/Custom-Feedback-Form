import React, { useState, useEffect } from 'react';
import { getForms, deleteForm } from '../api/formApi';  // Ensure these are correctly implemented
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  // Fetch forms on component mount
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const data = await getForms();
        setForms(data);
      } catch (error) {
        console.error('Failed to fetch forms:', error);
      }
    };
    fetchForms();
  }, []);

  // Handle form deletion
  const handleDelete = async (id) => {
    try {
      await deleteForm(id);
      setForms(forms.filter(form => form.id !== id));
    } catch (error) {
      console.error('Failed to delete form:', error);
    }
  };

  return (
    <div>
      <h2>Feedback Forms</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/admin/create')}  // Fixed route string
      >
        Create New Form
      </Button>
      <List>
        {forms.map((form) => (
          <ListItem key={form.id}>
            <ListItemText primary={form.title} secondary={form.description} />
            <Button
              onClick={() => navigate(/admin/edit/${form.id})}  // Fixed route string
            >
              Edit
            </Button>
            <Button onClick={() => handleDelete(form.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dashboard;