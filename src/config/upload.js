// Import Multer: Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
const multer = require('multer');

// Import path module: utilities for working with file and directory paths.
const path = require('path');

const crypto = require('crypto');

module.exports = {
  // storage: Where to store the files. The diskStorage engine gives full control on storing files to disk.
  storage: multer.diskStorage({
    // destination is used to determine within which folder the uploaded files should be stored.
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    // filename is used to determine what the file should be named inside the folder.
    filename: function(req, file, cb) {
      // Generates cryptographically strong pseudo-random data to provide a unique filename.
      crypto.randomBytes(16, (err, hash) => {
        if (err) throw err;
        file.key = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, file.key);
      });
    }
  })
};
