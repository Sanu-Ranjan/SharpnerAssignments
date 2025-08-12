const { dbconnect } = require("../config/dbconnect");

const { DataTypes } = require("sequelize");

const Coures = dbconnect.define("Courses", {
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

module.exports.Courses = Coures;
