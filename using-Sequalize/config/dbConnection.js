const { Sequelize } = require("sequelize");

let db = {
  database: process.env.DB,
  username: process.env.NAME,
  password: process.env.PASS,
};

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: "localhost",
  port: 3303,
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports.sequelize = sequelize;
