// src/components/Callback.js
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const CLIENT_ID = 'your_client_id';
const CLIENT_SECRET = 'your_client_secret';
const REDIRECT_URI = 'http://localhost:3000/callback';
const TOKEN_URL = 'https://app.clio.com/oauth/token';

function Callback() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');

    useEffect(() => {
        const fetchAccessToken = async () => {
            if (!code) return;

            try {
                const response = await axios.post(TOKEN_URL, {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    code: code,
                    grant_type: 'authorization_code',
                    redirect_uri: REDIRECT_URI
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                const accessToken = response.data.access_token;
                
                // Store the access token in localStorage or sessionStorage
                localStorage.setItem('access_token', accessToken);

                // Redirect the user to the custom field page or home
                navigate('/custom-field-set/your-set-id'); // Replace with actual set ID
            } catch (error) {
                console.error('Error fetching access token:', error);
                alert('Failed to retrieve access token.');
            }
        };

        fetchAccessToken();
    }, [code, navigate]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Logging you in...</h2>
        </div>
    );
}

export default Callback;
