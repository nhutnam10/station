const { Station } = require("../models");

const createTicket = async (req, res) => {
  const { user_id } = req.body;
  try {
    const newTicket = await Ticket.create({});
    res.status(201).send(newTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTicket,
}