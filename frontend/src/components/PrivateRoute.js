// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('access_token');

  // If the token exists, render the requested component, otherwise redirect to login
  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
