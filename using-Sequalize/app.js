const express = require("express");
const { sequelize } = require("./config/dbConnection");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();

const student = require("./models/students");

const port = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
