// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/');
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Logout;