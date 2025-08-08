require("dotenv").config();
const config = require("config");

const db = require("./config/dbconfig");

const express = require("express");
const studentsRoute = require("./routes/student");
const app = express();

const port = config.get("port");

app.use(express.json());

db.connection.connect();

app.use("/students", studentsRoute.router);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
