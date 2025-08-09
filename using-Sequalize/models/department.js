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
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports.Department = Department;
