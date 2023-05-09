const express = require('express');
const { stationRouter } = require('./station.routers');
const { userRouter } = require('./user.routers');
const { tripRouter } = require('./trip.routers');
const { ticketRouter } = require('./ticket.routers');

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trips", tripRouter);
rootRouter.use("/tickets", ticketRouter);


module.exports = {
  rootRouter,
}