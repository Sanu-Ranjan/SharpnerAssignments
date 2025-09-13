const { Sequelize } = require("sequelize");
const pass = process.env.DBPASS;
const port = process.env.DBPORT;
if (!pass) {
  console.log(`missing databse password`);
  process.exit(1);
}
if (!port) {
  console.log(`missing databse port`);
  process.exit(1);
}
const database = new Sequelize("practise", "root", pass, {
  host: "localhost",
  port: port,
  dialect: "mysql",
  logging: console.log,
});

(async () => {
  try {
    await database.authenticate();
    console.log("connection to database server has been extablished");
  } catch (error) {
    console.log("Unable to connect to data base: ", error);
    process.exit(1);
  }
})();

module.exports = {
  database,
};
