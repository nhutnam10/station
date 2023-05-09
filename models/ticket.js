"use strict";
const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate({ User, Trip }) {
      // Ticket thuoc ve
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Trip, { foreignKey: 'trip_id' });
    }
  }
  Ticket.init(
    {
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};

