const express = require("express");
const app = express();
const expenseRouter = require("./routes/expense");
const cors = require("cors");
const { db } = require("./config/dbconnect");
require("./models/expense");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/expenses", expenseRouter.router);

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
