const express = require("express");

const userRouter = require("./routes/user");
const busRouter = require("./routes/bus");

const { db } = require("./config/dbConnect");
require("./models/users");
require("./models/buses");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRouter.router);
app.use("/buses", busRouter.router);

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
