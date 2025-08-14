const { dbconnect } = require("../config/dbconnect");
const { DataTypes } = require("sequelize");

const Idcard = dbconnect.define("idcards", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  IdNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports = {
  Idcard,
};
