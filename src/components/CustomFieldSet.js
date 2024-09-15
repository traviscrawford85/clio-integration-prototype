// src/components/CustomFieldSet.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material'; // Remove Button if not used
import { useParams, useNavigate } from 'react-router-dom';
import { clioApiRequest } from '../api';

function CustomFieldSet() {
  const { setId } = useParams();
  const [customFieldSet, setCustomFieldSet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomFieldSet = async () => {
      try {
        const data = await clioApiRequest(`custom_field_sets/${setId}.json`);
        setCustomFieldSet(data);
      } catch (err) {
        if (err.message === "Token expired or invalid, please login again.") {
          navigate('/');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCustomFieldSet();
  }, [setId, navigate]);

  if (loading) return <CircularProgress />;

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Custom Fields in Set: {customFieldSet?.data?.name || 'Unknown'}
      </Typography>
      {customFieldSet?.data?.custom_fields?.map(field => (
        <Typography key={field.id}>
          {field.name}: {field.value || 'No value set'}
        </Typography>
      ))}
    </Container>
  );
}

export default CustomFieldSet;
