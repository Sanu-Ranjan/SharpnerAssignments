const router = require("express").Router();

const data = require("../data/students.json");

router.get("/", (req, res) => {
  let students = ``;

  for (let val of data) {
    students = `${students}\n <li>${val.name}</li>`;
  }

  res.send(`<ul>${students}</ul>`);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;

  for (let val of data) {
    if (val.id == id) {
      res.send(`<h1>${id} name:${val.name}</h1>`);
      return;
    }
  }

  res.send(`Id not found`);
});

module.exports.router = router;
