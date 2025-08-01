const express = require("express");

const app = express();

const fruitRoutes = require("./routes/fruits");
const vegetableRoutes = require("./routes/vegetables");

const port = 4000;

app.use("/fruits", fruitRoutes.router);
app.use("/vegetable", vegetableRoutes.router);

app.listen(port, () => {
  console.log(
    `Server is up and running on http://localhost:${port}! Ready to handle requests.`
  );
});
