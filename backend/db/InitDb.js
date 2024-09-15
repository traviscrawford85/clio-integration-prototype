// backend/db/InitDb.js
const sqlite3 = require('sqlite3').verbose();

function initializeDatabase() {
  const db = new sqlite3.Database('./db/clio.db', (err) => {
    if (err) {
      console.error('Error connecting to the SQLite database:', err.message);
      process.exit(1);
    } else {
      console.log('Connected to SQLite database.');
    }
  });

  // Create tables if they don't exist
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS matters (
        id INTEGER PRIMARY KEY,
        display_number TEXT,
        description TEXT,
        status TEXT
      )
    `, (err) => {
      if (err) {
        console.error('Error creating matters table:', err.message);
      } else {
        console.log('Matters table initialized.');
      }
    });

    // Add more table definitions here if needed
    // Example: Users table
    // db.run(`
    //   CREATE TABLE IF NOT EXISTS users (
    //     id INTEGER PRIMARY KEY,
    //     name TEXT,
    //     email TEXT
    //   )
    // `);
  });

  db.close((err) => {
    if (err) {
      console.error('Error closing the database connection:', err.message);
    } else {
      console.log('Database connection closed.');
    }
  });
}

// Run the initialization
initializeDatabase();
