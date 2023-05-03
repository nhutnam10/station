const authorize = (req, res, next) => {
  const { user } = req;
  if (["ADMIN", "SUPER_ADMIN"].findIndex((ele) => ele === user.type) > -1) {
    next();
  } else {
    res.status(403).send("Khong co quyen truy cap");
  }
}

module.exports = {
  authorize
} 