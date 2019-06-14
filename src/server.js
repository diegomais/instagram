// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Import cors package: provide a Connect/Express middleware that can be used to enable CORS with various options.
var cors = require('cors');

// Import path module: utilities for working with file and directory paths.
const path = require('path');

// Import dotenv module: load environment variables from '.env'.
const dotenv = require('dotenv').config();

// Import database configurations
const connectDB = require('./config/db');

// Create an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// Import HTTP server and client. Return instance of http.Server.
const server = require('http').Server(app);

// Import Socket.IO: enables real-time bidirectional event-based communication. Attach socket.io to http.Server instance.
const io = require('socket.io')(server);

// Connect Database
connectDB();

// Enable All CORS Requests.
app.use(cors());

// Create a middleware to provide socket.io to all requests.
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Serve "/files" route to images files in "../uploads/resized".
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
);

// Load the routes module in the app.
app.use('/api', require('./routes'));

/** Create a constant reference to port declared on environment variables
 * or set the port of remote server to 3333.  */
const PORT = process.env.PORT || 3333;

// Bind and listen for connections on the specified port.
server.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
