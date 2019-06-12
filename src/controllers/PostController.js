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

    // Insert values on database.
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });

    // Return post saved on database.
    return res.json(post);
  }
};
