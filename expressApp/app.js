const express = require("express");

const app = express();

const animeRoutes = require("./routes/anime");
const academicRoutes = require("./routes/academic");

const port = 4000;

app.use("/anime", animeRoutes.router);
app.use("/academic", academicRoutes.router);

app.listen(port, () => {
  console.log(
    `Server is up and running on http://localhost:${port}! Ready to handle requests.`
  );
});
