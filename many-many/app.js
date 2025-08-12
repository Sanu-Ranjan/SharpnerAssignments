const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { dbconnect } = require("./config/dbconnect");
const student = require("./routes/sudent");

require("./models/index");

app.use(express.json());

//students route
app.use("/students", student.router);
//courses route
//studentCourses route

dbconnect.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`listeling on port:${port}`);
  });
});
