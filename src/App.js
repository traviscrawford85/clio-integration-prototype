// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Callback from './components/Callback';
import CustomFieldSet from './components/CustomFieldSet';
import Home from './components/Home';
import Matters from './components/Matters';  // You will create this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/home" element={<Home />} />  {/* Homepage after login */}
        <Route path="/custom-field-set/:setId" element={<CustomFieldSet />} />
        <Route path="/matters" element={<Matters />} />  {/* Create Matters Component */}
        <Route path="/matters" element={<Matters />} /> {/* Route for Matters */}
        <Route path="/logout" element={<Login />} />  {/* Simple logout */}
      </Routes>
    </Router>
  );
}

export default App;
