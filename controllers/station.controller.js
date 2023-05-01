const { Station } = require("../models");

const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send("Error");
  }
};

const getAllStation = async (req, res) => {
  try {
    const stationList = await Station.findAll();
    res.status(200).send(stationList);
  } catch (error) {
    res.status(500).send("Error");
  }
}

const getDetailStation = async (req, res) => {
  let { id } = req.params;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      }
    });
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send("Error");
  }
}

const updateStation = async (req, res) => {
  const { name, address, province } = req.body;
  let { id } = req.params;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      }
    });
    detailStation.name = name;
    detailStation.address = address;
    detailStation.province = province;
    await detailStation.save();
    res.status(200).send(detailStation);
  } catch (error) {
    res.status(500).send("Error");
  }
}
module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation
}