// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Import Multer: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require('multer');

// Load Multer options.
const uploadConfig = require('./config/upload');

// Load Post controller.
const PostController = require('./controllers/PostController');

// Create an express.Router: a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const routes = express.Router();

// Create an Multer application.
const upload = multer(uploadConfig);

// Define routes using Multer middleware.
routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;
