const { Sequelize } = require("sequelize");

const { dbcred } = require("./credentials");

const db = new Sequelize(
  dbcred.name.value,
  dbcred.user.value,
  dbcred.password.value,
  {
    host: "localhost",
    port: 3303,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await db.authenticate();
    console.log("connection has been extablished");
  } catch (error) {
    console.log("Unable to connect to data base");
  }
})();

module.exports.dbconnect = db;
