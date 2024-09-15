// src/components/Home.js
import React from 'react';
import { Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the Clio Integration App
      </Typography>
      <Typography variant="h6" gutterBottom>
        What would you like to do today?
      </Typography>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigate('/custom-field-set/your-set-id')}
          >
            Get Custom Fields
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleNavigate('/matters')}
          >
            Retrieve Matters
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="default" onClick={() => handleNavigate('/logout')}>
            Logout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
