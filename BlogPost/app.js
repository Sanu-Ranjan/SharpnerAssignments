const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { dbconnect } = require("./config/dbConnect");

dbconnect.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`listeling on port:${port}`);
  });
});
