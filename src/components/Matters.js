// src/components/Matters.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Grid, Paper } from '@mui/material';
import { clioApiRequest } from '../api'; // API request helper function

function Matters() {
  const [matters, setMatters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch matters from Clio API
    const fetchMatters = async () => {
      try {
        const data = await clioApiRequest('matters.json');
        setMatters(data.data); // Assuming the response has 'data' property with an array of matters
      } catch (err) {
        setError('Failed to load matters. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMatters();
  }, []);

  if (loading) {
    return <CircularProgress style={{ marginTop: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />;
  }

  if (error) {
    return <Typography color="error" style={{ textAlign: 'center', marginTop: '50px' }}>{error}</Typography>;
  }

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Matters
      </Typography>
      <Grid container spacing={3}>
        {matters.map((matter) => (
          <Grid item xs={12} sm={6} md={4} key={matter.id}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">{matter.display_number}</Typography>
              <Typography variant="body1">
                {matter.description || 'No description available'}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {matter.status}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Matters;
