const { Station } = require('../../models');
const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const station = await Model.findOne({
      where: {
        id,
      }
    });
    if (station) {
      next();
    } else {
      res.status(404).send("Khong tim thay id");
    }
  };
}

module.exports = {
  checkExist,
}