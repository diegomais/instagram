// Import Multer: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require('multer');

// Import path module: utilities for working with file and directory paths.
const path = require('path');

module.exports = {
  // storage: Where to store the files. The diskStorage engine gives full control on storing files to disk.
  storage: multer.diskStorage({
    // destination is used to determine within which folder the uploaded files should be stored.
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    // filename is used to determine what the file should be named inside the folder.
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};
