require("dotenv").config();

const config = require("config");

let mysql = require("mysql2");

const connection = {
  config: mysql.createConnection({
    host: config.get("dbhost"),
    port: config.get("portdb"),
    user: config.get("dbuser"),
    password: config.get("dbpass"),
    database: config.get("dbname"),
    multipleStatements: true,
  }),

  connect() {
    this.config.connect((err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`connection has been created`);

      const querry = `create table  if not exists students (
        id int not null AUTO_INCREMENT, name varchar(50) not null, email varchar(100) not null unique, age int not null,
        primary key(id));`;

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
