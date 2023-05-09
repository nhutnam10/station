"use strict";
const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    static associate({ Station, Ticket }) {
      // connect table ||  belongsTo = thuoc ve
      this.belongsTo(Station, { foreignKey: 'fromStation', as: 'from' });
      this.belongsTo(Station, { foreignKey: 'toStation', as: 'to' });
      // 1 trip co nhieu ve
      this.hasMany(Ticket, { foreignKey: "user_id" });
    }
  }
  Trip.init(
    {
      startTime: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};

