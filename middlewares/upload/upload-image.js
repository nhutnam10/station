// setup upload file

// auto create foder
const { mkdirp } = require('mkdirp');

const multer = require('multer');
const uploadImage = (type) => {
  // create folder
  const made = mkdirp.sync(`./public/images/${ type }`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${ type }`); // setup save file
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname); // rename file
    },
  });
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const extensionImageList = [".PNG", ".jpg"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error('file not accepted'));
      }
    },
  });
  return upload.single(type);
};

module.exports = {
  uploadImage
}