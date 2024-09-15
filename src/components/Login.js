// src/components/Login.js
import React from "react";

const CLIENT_ID = "YOUR_CLIENT_ID";
const REDIRECT_URI = "http://localhost:3000/callback";
const AUTH_URL = `https://app.clio.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=read:custom_fields`;

function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Login with Clio</h2>
        <a href={AUTH_URL}>
            <button>Login with Clio</button>
        </a>
    </div>
    );
}

export default Login;