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
  multipleStatements: true,
});

conection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`connection has been created`);

  const querry = `create table users(
  userID int not null, name varchar(50) not null, Email varchar(100) not null,
  primary key(userID));
  create table Buses( busID int not null, busNumber int not null, totalSeats int not null, availableSeats int not null,
  primary key(busID));
  create table Payments(paymentID int not null, amountPaid int not null, paymentStatus Varchar(30),primary key(paymentID));`;

  conection.query(querry, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("table created");
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
