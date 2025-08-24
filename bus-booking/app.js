const express = require("express");
const { dbconnect } = require("./db/connect");
const app = express();
const port = process.env.PORT || 3000;
require("./models/index");
const userRouter = require("./routes/users");
const { busRouter } = require("./routes/buses");
app.use(express.json());

app.use("/users", userRouter.router);
app.use("/buses", busRouter);
dbconnect.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
