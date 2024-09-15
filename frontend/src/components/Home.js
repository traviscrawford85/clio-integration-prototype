// src/components/Home.js
import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to the Login page
    navigate('/login');
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>Welcome to the Clio Integration App</Typography>
      <Typography variant="h6" gutterBottom>Log in to access your dashboard and features</Typography>
      
      {/* Button to redirect to the login page */}
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with Clio
      </Button>
    </Container>
  );
}

export default Home;
