const { dbconnect } = require("../config/dbconnect");

const { DataTypes } = require("sequelize");

const Students = dbconnect.define("Students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports.Students = Students;
