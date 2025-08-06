require("dotenv").config();
const config = require("config");

const app = require("express")();

const mysql = require("mysql2");

const port = config.get("port");

const conection = mysql.createConnection({
  host: config.get("db.host"),
  port: config.get("db.port"),
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.database"),
});

conection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`connection has been created`);
});

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
