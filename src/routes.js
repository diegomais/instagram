// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Import Multer: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require('multer');

// Load Multer options.
const uploadConfig = require('./config/upload');

// Load Post controller.
const PostController = require('./controllers/PostController');

// Load Like controller.
const LikeController = require('./controllers/LikeController');

// Create an express.Router: a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const routes = express.Router();

// Create an Multer application.
const upload = multer(uploadConfig);

// Define route to get all posts.
routes.get('/posts', PostController.index);

// Define route to create a post using Multer middleware.
routes.post('/posts', upload.single('image'), PostController.store);

// Define route to like post.
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;
