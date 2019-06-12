// Load Post model.
const Post = require('../models/Post');

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    return res.json({ ok: true });
  }
};
