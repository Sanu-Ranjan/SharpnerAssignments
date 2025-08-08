const { sequelize } = require("../config/dbConnection");
const { Sequelize, DataTypes } = require("sequelize");

const student = sequelize.define("Students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports.student = student;
