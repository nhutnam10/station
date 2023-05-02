const express = require('express');
const { User } = require('../models');
const { register } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post("/register", register);





module.exports = {
  userRouter,
}