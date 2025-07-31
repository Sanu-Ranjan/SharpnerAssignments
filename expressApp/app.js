const express = require("express");

const app = express();

const port = 3000;

app.use("/welcome", (req, res, next) => {
  req.user = "Guest";
  next();
});

app.get("/welcome", (req, res) => {
  res.send(`<h1> Welcome ${req.user} </h1>`);
});

app.listen(port, () => {
  console.log(
    `Server is up and running on port ${port}! Ready to handle requests.`
  );
});
