// src/components/MatterUpdate.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, TextField, CircularProgress, Grid, Paper } from '@mui/material';

function MatterUpdate() {
  const [matters, setMatters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMatter, setSelectedMatter] = useState(null);

  useEffect(() => {
    // Fetch matters from SQLite
    const fetchMatters = async () => {
      try {
        const response = await axios.get('/api/matters');
        setMatters(response.data.data);
      } catch (err) {
        setError('Failed to load matters.');
      } finally {
        setLoading(false);
      }
    };

    fetchMatters();
  }, []);

  const handleMatterUpdate = async (matter) => {
    try {
      const response = await axios.post('/api/update-matter', {
        id: matter.id,
        display_number: matter.display_number,
        description: matter.description,
        status: matter.status
      });
      alert(response.data.message);  // Notify the user of success
    } catch (error) {
      console.error('Error updating matter:', error);
      alert('Failed to update matter.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedMatter({ ...selectedMatter, [name]: value });
  };

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Update Matters</Typography>
      {error && <Typography color="error">{error}</Typography>}

      <Grid container spacing={3}>
        {matters.map(matter => (
          <Grid item xs={12} sm={6} md={4} key={matter.id}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">{matter.display_number}</Typography>
              <Typography>Description: {matter.description}</Typography>
              <Typography>Status: {matter.status}</Typography>

              <Button variant="contained" onClick={() => setSelectedMatter(matter)}>
                Edit Matter
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {selectedMatter && (
        <div>
          <Typography variant="h6" gutterBottom>Edit Matter</Typography>

          <TextField
            label="Display Number"
            name="display_number"
            value={selectedMatter.display_number}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={selectedMatter.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Status"
            name="status"
            value={selectedMatter.status}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleMatterUpdate(selectedMatter)}
          >
            Update Matter
          </Button>
        </div>
      )}
    </Container>
  );
}

export default MatterUpdate;
