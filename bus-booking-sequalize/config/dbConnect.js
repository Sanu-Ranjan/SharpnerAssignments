const { Sequelize } = require("sequelize");

let cred = {
  database: process.env.DB,
  username: process.env.NAME,
  password: process.env.PASS,
};

const db = new Sequelize(cred.database, cred.username, cred.password, {
  host: "localhost",
  port: 3303,
  dialect: "mysql",
});

(async () => {
  try {
    await db.authenticate();
    console.log("connection has been established");
  } catch (error) {
    console.log("unable to connect to data base:", error);
  }
})();

module.exports.db = db;
