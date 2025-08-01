const express = require("express");

const app = express();

const port = 4000;

app.use((req, res, next) => {
  let timeStamp = new Date();
  console.log(
    `${timeStamp.toLocaleString("en-IN")} ${req.method} request made to ${
      req.originalUrl
    }`
  );
  next();
});

app.get("/products", (req, res) => {
  res.send(`<h1>Here is the list of all products.</h1>`);
});

app.post("/products", (req, res) => {
  res.send(`<h1>A new product has been added.</h1>`);
});

app.get("/categories", (req, res) => {
  res.send(`<h1>Here is the list of all categories.</h1>`);
});

app.post("/categories", (req, res) => {
  res.send(`<h1>A new category has been created.</h1>`);
});

app.use((req, res, next) => {
  res.status(404).send(`<h1>404-Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(
    `Server is up and running on http://localhost:${port}! Ready to handle requests.`
  );
});
