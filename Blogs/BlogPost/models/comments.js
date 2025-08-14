const { dbconnect } = require("../config/dbConnect");

const { DataTypes } = require("sequelize");

const Comments = dbconnect.define("Comments", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  comm: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },
});

module.exports = {
  Comments,
};
