const express = require("express");
const app = express();

const { db } = require("./config/dbConnect");

const port = process.env.PORT || 3000;

db.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
});
