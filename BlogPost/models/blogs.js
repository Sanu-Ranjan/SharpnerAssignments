const { dbconnect } = require("../config/dbConnect");

const { DataTypes } = require("sequelize");

let Blogs = dbconnect.define("Blogs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
});

module.exports = {
  Blogs,
};
