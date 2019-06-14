// Import sharp package: High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP and TIFF images.
const sharp = require('sharp');

// Import path module: utilities for working with file and directory paths.
const path = require('path');

// Import file system module: interact with the file system in a manner closely modeled around standard POSIX functions.
const fs = require('fs');

// Load Post model.
const Post = require('../models/Post');

module.exports = {
  /**
   * PostController.index gets all posts on database.
   */
  async index(req, res) {
    // Find all posts and sets the sort order by descending createdAt date.
    const posts = await Post.find().sort('-createdAt');

    // Return all posts found.
    return res.json(posts);
  },

  /**
   * PostController.store creates a new post on database.
   */
  async store(req, res) {
    // Get values on request.
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    // Destructuring name and extension of file.
    const [name] = image.split('.');

    // Append ".jpg" to name of file
    const fileName = `${name}.jpg`;

    // Resize uploaded image to 500px wide,convert to JPEG output and save to resized folder.
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'resized', fileName));

    // Remove uploaded image.
    fs.unlinkSync(req.file.path);

    // Insert values on database.
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName
    });

    // Return post saved on database.
    return res.json(post);
  }
};
