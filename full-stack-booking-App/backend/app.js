const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./config/dbConnect");
require("./models/user");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
