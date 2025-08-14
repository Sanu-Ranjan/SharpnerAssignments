const express = require("express");
const app = express();
const blogRouter = require("./router/blogs");
const commentRouter = require("./router/comments");

const port = process.env.PORT || 3000;
const { dbconnect } = require("./config/dbConnect");

require("./models");

app.use(express.json());

app.use("/blogs", blogRouter.router);
app.use("/comments", commentRouter.router);

dbconnect.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`listeling on port:${port}`);
  });
});
