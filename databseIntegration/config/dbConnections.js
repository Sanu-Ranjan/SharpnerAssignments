require("dotenv").config();

const config = require("config");

const mysql = require("mysql2");

const connection = {
  config: mysql.createConnection({
    host: config.get("db.host"),
    port: config.get("db.port"),
    user: config.get("db.user"),
    password: config.get("db.password"),
    database: config.get("db.database"),
    multipleStatements: true,
  }),

  connect() {
    this.config.connect((err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`connection has been created`);

      const querry = `create table  if not exists users (
        userID int not null AUTO_INCREMENT, name varchar(50) not null, Email varchar(100) not null,
        primary key(userID));
        create table  if not exists Buses ( busID int not null AUTO_INCREMENT, busNumber int not null, totalSeats int not null, availableSeats int not null,
        primary key(busID));
        create table  if not exists Payments (paymentID int not null AUTO_INCREMENT, amountPaid int not null, paymentStatus Varchar(30),primary key(paymentID));`;

      this.config.query(querry, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("table created");
        }
      });
    });
  },
};

module.exports.connection = connection;
