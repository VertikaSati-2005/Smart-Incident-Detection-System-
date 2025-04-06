const express = require('express');
const path = require('path');
const app = express();
const incidentsRoute = require('./routes/incidents');

// Middleware to parse JSON
app.use(express.json());

// Serve videos statically
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// API route
app.use('/api', incidentsRoute);

// Test route
app.get('/', (req, res) => {
  res.send('Smart Incident Detection System Backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
