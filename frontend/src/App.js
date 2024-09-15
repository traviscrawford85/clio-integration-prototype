// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Landing page
import Login from './components/Login';  // Login page
import Callback from './components/Callback';  // OAuth callback
import Dashboard from './components/Dashboard';  // Post-login dashboard
import CustomFieldSet from './components/CustomFieldSet';  // Custom field set
import Matters from './components/Matters';  // Matters page
import MatterUpdate from './components/MatterUpdate';  // SQLite and Clio update
import PrivateRoute from './components/PrivateRoute';  // Private route protection

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route should point to the Home or Login page */}
        <Route path="/" element={<Home />} />

        {/* Login and OAuth callback routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/callback" element={<Callback />} />

        {/* Private routes accessible after login */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/custom-field-set/:setId" element={<PrivateRoute element={<CustomFieldSet />} />} />
        <Route path="/matters" element={<PrivateRoute element={<Matters />} />} />
        <Route path="/update-matter" element={<PrivateRoute element={<MatterUpdate />} />} />

        {/* Logout route */}
        <Route path="/logout" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
