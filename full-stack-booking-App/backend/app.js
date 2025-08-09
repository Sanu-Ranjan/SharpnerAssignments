const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const cors = require("cors");
const { db } = require("./config/dbConnect");
require("./models/user");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter.router);

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
