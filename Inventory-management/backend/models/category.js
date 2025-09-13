const { database } = require("../database/db");
const { DataTypes } = require("sequelize");

const Category = database.define("category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = {
  Category,
};
