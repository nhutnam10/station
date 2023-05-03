const jwt = require('jsonwebtoken');
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "nam123");
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send("ban chua dang nhap");
    }
  } catch (error) {
    res.status(401).send("error: ban chua dang nhap");
  }
};

module.exports = {
  authenticate
}