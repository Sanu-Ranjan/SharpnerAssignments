const express = require("express");

const app = express();

const student = require("./routes/students");

const courses = require("./routes/courses");

const port = 3000;

app.get("/", (req, res) => {
  res.send(`Welcome!!!`);
});

app.use("/students", student.router);

app.use("/courses", courses.router);

app.use((req, res) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
