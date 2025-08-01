const express = require("express");

const app = express();

const cartRoute = require("./routes/user").router;

const productRoute = require("./routes/products").router;

const port = 3000;

app.use("/user", cartRoute);

app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Test Server</h1>`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
