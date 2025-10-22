// server.js - Starter Express server for Week 2 assignment

// Import required modules
const connectDB = require('./config/db');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
console.log(process.env.NODE_ENV);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware setup
app.use(bodyParser.json());
app.use(logger);
app.use(auth);
app.use("/products", require('./routes/productRoutes'));


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /products to see all products.');
});

app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 