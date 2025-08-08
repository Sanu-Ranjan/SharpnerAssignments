require("dotenv").config();
const config = require("config");
const userRoute = require("./routes/users");
const busRoute = require("./routes/buses");
const express = require("express");
const app = express();
const port = config.get("port");
const db = require("./config/dbConnections");

db.connection.connect();

app.use(express.json());

app.use("/users", userRoute.router);

app.use("/buses", busRoute.router);

app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
