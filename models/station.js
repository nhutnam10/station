"use strict";
const { DataTypes, Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate({ Trip }) {
      // connect table
      this.hasMany(Trip, { foreignKey: 'fromStation', as: 'from' });
      this.hasMany(Trip, { foreignKey: 'toStation', as: 'to' });
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 20],

        }
      },
      address: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 20],
        }
      },
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};

