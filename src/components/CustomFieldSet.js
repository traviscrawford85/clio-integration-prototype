// src/components/CustomFieldSet.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clioApiRequest } from '../api';
import { Container, Typography, CircularProgress, Button } from '@mui/material';

function CustomFieldSet() {
    const { setId } = useParams();
    const navigate = useNavigate();
    const [customFieldSet, setCustomFieldSet] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCustomFieldSet = async () => {
            try {
                const data = await clioApiRequest(`custom_field_sets/${setId}.json`);
                setCustomFieldSet(data);
            } catch (err) {
                if (err.message === 'Token expired or invalid, please login again') {
                    // Redirect to login page if token is invalid
                    navigate('/');
                } else {
                setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchCustomFieldSet();
    }
    , [setId]);

    if (loading) return <CircularProgress />;

    if (error) return <Typography variant="h6" color="error">{error}</Typography>;

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Custom Fields in Set: {customFieldSet?.data?.name || "Unknown"}
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
