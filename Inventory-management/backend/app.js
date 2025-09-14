const express = require("express");
const app = express();
const cors = require("cors");
const { database } = require("./database/db");
require("./models");
const inventory = require("./routes/inventory");
const category = require("./routes/category");

app.use(cors());
app.use(express.json());

app.use("/api/inventory", inventory.router);
app.use("/api/category", category.router);

app.use((req, res, next) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl,
    method: req.method,
  });
});

app.use((err, req, res) => {
  res.status(err.status || 500).json({ message: err.message, details: err });
});

const port = process.env.PORT || 3000;
(async function () {
  try {
    await database.sync({ force: false });
    app.listen(port, () => {
      console.log(`listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
