const express = require("express");
const app = express();
const blogRouter = require("./router/blogs");
const port = process.env.PORT || 3000;
const { dbconnect } = require("./config/dbConnect");

require("./models");

app.use(express.json());

app.use("/blogs", blogRouter.router);

dbconnect.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`listeling on port:${port}`);
  });
});
