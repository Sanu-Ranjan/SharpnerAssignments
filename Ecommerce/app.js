const express = require("express");

const app = express();

const userRoute = require("./routes/user").router;

const productRoute = require("./routes/products").router;

const cartRoute = require("./routes/cart").router;

const port = 3000;

app.use(express.json());

app.use(express.static("public"));

app.use("/users", userRoute);

app.use("/products", productRoute);

app.use("/cart", cartRoute);

app.get("/", (req, res) => {
  res.send(`<h1>Welcome!!!</h1>`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
