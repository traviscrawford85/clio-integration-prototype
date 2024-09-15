const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow frontend access
app.use(express.json());  // Parse JSON request bodies

// Initialize SQLite database
const db = new sqlite3.Database('./db/clio.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Default route for "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Clio Integration Backend API');
});

// Fetch matters from SQLite
app.get('/api/matters', (req, res) => {
  db.all('SELECT * FROM matters', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: rows });
  });
});

// Sync matters with Clio API and store them in SQLite
app.get('/api/sync-matters', async (req, res) => {
  const accessToken = 'your_clio_access_token';  // Replace with actual token

  try {
    const response = await axios.get('https://app.clio.com/api/v4/matters.json', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const matters = response.data.data;

    // Store matters in SQLite
    const insertMatter = db.prepare('INSERT INTO matters (id, display_number, description, status) VALUES (?, ?, ?, ?)');
    matters.forEach(matter => {
      insertMatter.run(matter.id, matter.display_number, matter.description, matter.status);
    });
    insertMatter.finalize();

    res.json({ message: 'Matters synchronized successfully!' });
  } catch (error) {
    console.error('Error syncing matters:', error.message);
    res.status(500).json({ error: 'Failed to sync matters.' });
  }
});

// Update matter via Clio API
app.post('/api/update-matter', async (req, res) => {
  const { id, display_number } = req.body;
  const accessToken = 'your_clio_access_token';  // Replace with actual token

  try {
    const response = await axios.put(`https://app.clio.com/api/v4/matters/${id}.json`, {
      matter: { display_number }
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      res.json({ message: 'Matter updated successfully in Clio API' });
    } else {
      res.status(500).json({ error: 'Failed to update Clio' });
    }
  } catch (error) {
    console.error('Error updating matter:', error.message);
    res.status(500).json({ error: 'Failed to update Clio API' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
