// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Load Post controller.
const PostController = require('./controllers/PostController');

// Create an express.Router: a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const routes = express.Router();

// Define routes.
routes.post('/posts', PostController.store);

module.exports = routes;
