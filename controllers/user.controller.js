const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  const { name, email, password, numberPhone, type } = req.body;
  try {
    // create string radom
    const salt = bcrypt.genSaltSync(10);
    // encode salt
    const hastPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({ name, email, password: hastPassword, numberPhone, type: "Client" });
    res.status(201).send(newUser)
  } catch (error) {
    res.status(500).send(error)
  }
};

const login = async (req, res) => {
  const { email, password, } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      }
    });
    if (user) {
      const isAuthen = bcrypt.compareSync(password, user.password);
      if (isAuthen) {
        const token = jwt.sign({
          email: user.email,
          type: user.type,
        }, "nam123", { expiresIn: 60 * 60 });
        res.status(201).send({ message: "dang nhap thanh cong", token, });
      } else {
        res.status(500).send({ message: "dang nhap that bai" });
      }
    } else {
      res.status(404).send({ message: "tai khoang khong ton tai" });
    }
  } catch (error) {
    res.status(500).send(error)
  }
};

const uploadAvatar = (req, res) => {
  res.send("upload file run");
}

module.exports = {
  register,
  login,
  uploadAvatar
}