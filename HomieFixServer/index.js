// Load environment variables from .env file
require('dotenv').config();

// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Connect to MongoDB
require('./Models/db');

// Port config
const PORT = process.env.PORT || 8000;

// Routers
const AuthRouter = require('./Routes/AuthRouter');

// CORS Middleware (should come BEFORE any other middleware)
app.use(cors({
  origin: [
    'http://localhost:3000',        // React dev
    'http://localhost:5173',        // Vite dev
    'http://localhost:5174',        // Extra dev port
    'https://homie-fix.vercel.app'  // Deployed frontend on Vercel
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware to parse incoming request body
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/auth', AuthRouter);

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello, World! Hello Swapnil');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
