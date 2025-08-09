const { sequelize } = require("../config/dbConnection");
const { DataTypes } = require("sequelize");

const Idcard = sequelize.define("Idcards", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports.Idcard = Idcard;
