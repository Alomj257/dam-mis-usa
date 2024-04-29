const express = require("express");
const cors = require("cors");
const Router = require("../Routes/AllRoutes");
const app = express();
// Load environment variables from .env file
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", Router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal server error");
});

module.exports = app;
