const multer = require('multer');
const uploadImage = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/images/avatars"); // setup save file
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
  return upload.single('avatar')
};

module.exports = {
  uploadImage
}