const { DataTypes } = require("sequelize");
const { dbconnect } = require("../db/connect");

const Buses = dbconnect.define("buses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalseats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Buses };
