const express = require("express");

const app = express();

const port = 4000;

app.get("/welcome/:username", (req, res) => {
  const userName = req.params.username;
  const role = req.query.role;
  res.send(`hello ${userName} your role is ${role}`);
});

app.use((req, res, next) => {
  res.status(404).send(`<h1>404-Page Not Found</h1>`);
});

app.listen(port, () => {
  console.log(
    `Server is up and running on http://localhost:${port}! Ready to handle requests.`
  );
});
