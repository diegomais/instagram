// Load Post model.
const Post = require('../models/Post');

module.exports = {
  /**
   * PostController.store creates a new post on database.
   */
  async store(req, res) {
    // Get post by id defined in parameters.
    const post = await Post.findById(req.params.id);

    // Increase one like.
    post.likes += 1;

    // Save changes to database.
    await post.save();

    // Return post saved on database.
    return res.json(post);
  }
};
