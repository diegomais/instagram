// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Create an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// Respond with 'Hello Instamais!' when a GET request is made to the root URL (/) or route.
app.get('/', (req, res) => res.send('Hello Instamais!'));

/** Create a constant reference to port declared on environment variables
 * or set the port of remote server to 3333.  */
const PORT = process.env.PORT || 3333;

// Bind and listen for connections on the specified port.
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
