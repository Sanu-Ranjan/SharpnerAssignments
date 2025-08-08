require("dotenv").config();
const config = require("config");

const db = require("./config/dbconfig");

const express = require("express");

const app = express();

const port = config.get("port");

app.use(express.json());

db.connection.connect();

app.get("/", (req, res) => {
  res.send("APP working");
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
