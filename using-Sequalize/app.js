const express = require("express");
const { sequelize } = require("./config/dbConnection");
const app = express();
const studentRouter = require("./routes/student");
require("./models");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/students", studentRouter.router);

sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
