const { DataTypes } = require("sequelize");
const { dbconnect } = require("../db/connect");

const Bookings = dbconnect.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = {
  Bookings,
};
