// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://app.clio.com/api/v4/';

export const getAccessToken = () => localStorage.getItem('access_token');

export const clioApiRequest = async (endpoint) => {
  const token = getAccessToken();
  if (!token) {
    throw new Error("No access token available. Please login.");
  }

  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error("Token expired or invalid, please login again.");
    }
    throw error;
  }
};
