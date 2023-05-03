const express = require('express');
const { User } = require('../models');
const { register, login, uploadAvatar } = require('../controllers/user.controller');
// upload file
const { uploadImage } = require('../middlewares/upload/upload-image');
const { authenticate } = require('../middlewares/auth/authenticate');

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.post("/upload-avatar", authenticate, uploadImage(), uploadAvatar);


module.exports = {
  userRouter,
}