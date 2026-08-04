const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (Allows the frontend to talk to backend)
app.use(cors());
app.use(express.json()); // Parses incoming JSON data

// Basic Route (To test if server is working)
app.get('/', (req, res) => {
  res.send('API is running successfully!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});