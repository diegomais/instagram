// Import mongoose module: mongodb object modeling for node.js.
const mongoose = require('mongoose');

// Define post schema that defines the shape of the documents within posts collection.
const PostSchema = new mongoose.Schema(
  {
    author: { type: String, required: [true, "can't be blank."] },
    image: { type: String, required: true },
    place: { type: String },
    description: { type: String },
    hashtags: { type: String },
    likes: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = Post = mongoose.model('Post', PostSchema);
