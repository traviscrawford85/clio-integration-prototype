// src/components/Login.js
import React, { useEffect } from 'react';

const CLIENT_ID = 'your_client_id';  // Replace with your Clio client ID
const REDIRECT_URI = 'http://localhost:3000/callback';  // Adjust for your app's callback URL
const AUTH_URL = 'https://app.clio.com/oauth/authorize';

function Login() {
  useEffect(() => {
    // Redirect to Clio's OAuth login page
    window.location.href = `${AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Redirecting to Clio for login...</h2>
    </div>
  );
}

export default Login;
