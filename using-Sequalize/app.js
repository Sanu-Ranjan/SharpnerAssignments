const express = require("express");
const { sequelize } = require("./config/dbConnection");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const studentRouter = require("./routes/student");
require("./models/students");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/students", studentRouter.router);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
