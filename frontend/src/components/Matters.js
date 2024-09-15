import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, CircularProgress, Grid, Paper } from '@mui/material';
import { fetchMatters, syncMatters } from '../api';

function Matters() {
  const [matters, setMatters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [syncMessage, setSyncMessage] = useState('');

  useEffect(() => {
    const loadMatters = async () => {
      try {
        const data = await fetchMatters();
        setMatters(data);
      } catch (err) {
        setError('Failed to load matters.');
      } finally {
        setLoading(false);
      }
    };

    loadMatters();
  }, []);

  const handleSync = async () => {
    try {
      const message = await syncMatters();
      setSyncMessage(message);
      setLoading(true);
      const data = await fetchMatters();
      setMatters(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to sync matters.');
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Matters</Typography>
      <Button variant="contained" color="primary" onClick={handleSync}>Sync Matters</Button>
      {syncMessage && <Typography>{syncMessage}</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {matters.map(matter => (
          <Grid item xs={12} sm={6} md={4} key={matter.id}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">{matter.display_number}</Typography>
              <Typography>{matter.description || 'No description available'}</Typography>
              <Typography>Status: {matter.status}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Matters;
