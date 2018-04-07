// Require dependencies
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");

const app = express();


const PORT = process.env.PORT || 3000;

// Setup body-parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets and prep for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/run-buddyDB");

// Linking the server to the route files
app.use(routes);

// Start the server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
