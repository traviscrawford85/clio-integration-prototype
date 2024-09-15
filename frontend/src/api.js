// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // Your backend URL

// Fetch matters from SQLite (via backend)
export const fetchMatters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/matters`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching matters:', error);
    throw error;
  }
};

// Sync matters with Clio API (backend handles this)
export const syncMatters = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sync-matters`);
    return response.data.message;
  } catch (error) {
    console.error('Error syncing matters:', error);
    throw error;
  }
};

// Add the updateMatter function to update matters via Clio API
export const updateMatter = async (matterId, updatedData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/update-matter`, {
      id: matterId,
      ...updatedData
    });
    return response.data.message;
  } catch (error) {
    console.error('Error updating matter via Clio API:', error);
    throw error;
  }
};
