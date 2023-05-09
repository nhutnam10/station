const { Trip, Station } = require("../models");
const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  try {
    const newTrip = await Trip.create({
      fromStation,
      toStation,
      startTime,
      price
    });
    res.status(201).send(newTrip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: "from" // config in station - trip
      },
      {
        model: Station,
        as: "to" // config in station - trip
      }
    ]
  });
  res.status(201).send(tripList);
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    await Trip.destroy({
      where: {
        id,
      }
    });
    res.status(200).send("Xoa Thanh Cong");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  let { id } = req.params;
  try {
    const detailTrip = await Trip.findOne({
      where: {
        id,
      }
    });
    detailTrip.fromStation = fromStation;
    detailTrip.toStation = toStation;
    detailTrip.startTime = startTime;
    detailTrip.price = price;
    await detailTrip.save();
    res.status(200).send(detailTrip);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip
}