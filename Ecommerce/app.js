const express = require("express");

const app = express();

const cartRoute = require("./routes/user").router;

const port = 3000;

app.use("/user", cartRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Test Server</h1>`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
