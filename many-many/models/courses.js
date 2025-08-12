const { dbconnect } = require("../config/dbconnect");

const { DataTypes } = require("sequelize");

const Joi = require("joi");

const Courses = dbconnect.define("Courses", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
});

module.exports = {
  Courses,
};
