// src/components/CustomFieldSet.js
import React, { useEffect, useState } from 'react';
import { fetchMatters, updateMatter } from '../api';  // Now include updateMatter

function CustomFieldSet() {
  const [matters, setMatters] = useState([]);
  const [updatedDisplayNumber, setUpdatedDisplayNumber] = useState('');

  useEffect(() => {
    // Fetch the matters from SQLite (via backend API)
    const getMatters = async () => {
      try {
        const data = await fetchMatters();
        setMatters(data);
      } catch (error) {
        console.error('Error fetching matters:', error);
      }
    };

    getMatters();
  }, []);

  const handleUpdateMatter = async (matterId) => {
    try {
      // Send updated data to the backend, which will call the Clio API
      const message = await updateMatter(matterId, { display_number: updatedDisplayNumber });
      alert(message);  // Display the success message
    } catch (error) {
      console.error('Error updating matter:', error);
    }
  };

  return (
    <div>
      <h2>Matters List</h2>
      <ul>
        {matters.map(matter => (
          <li key={matter.id}>
            {matter.display_number} - {matter.description}
            <input
              type="text"
              value={updatedDisplayNumber}
              onChange={(e) => setUpdatedDisplayNumber(e.target.value)}
              placeholder="Update Display Number"
            />
            <button onClick={() => handleUpdateMatter(matter.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomFieldSet;
