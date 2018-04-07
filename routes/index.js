const path = require("path");
const Router = require("express").Router();
const apiRoutes = require("./API");

// Set up API routes
// All API routes will begin with "/api"
Router.use('/api', apiRoutes);

// Send React to this location if no API routes
Router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = Router;