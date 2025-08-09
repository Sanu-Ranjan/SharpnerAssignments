const { sequelize } = require("../config/dbConnection");
const { DataTypes } = require("sequelize");

const Department = sequelize.define("Department", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports.Department = Department;
