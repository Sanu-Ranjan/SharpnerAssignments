const { dbconnect } = require("../config/dbConnect");

const { DataTypes } = require("sequelize");

const Comments = dbconnect.define("Comments", {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  },
  comment: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
});

module.exports = {
  Comments,
};
