const router = require("express").Router();

const data = require("../data/courses.json");

router.get("/", (req, res) => {
  let courses = ``;

  for (let val of data) {
    courses = `${courses}\n <li>${val.name} description: ${val.description}</li>`;
  }

  res.send(`<ul>${courses}</ul>`);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;

  for (let val of data) {
    if (val.id == id) {
      res.send(
        `<h1>${id} name:${val.name} description:${val.description}</h1>`
      );
      return;
    }
  }

  res.send(`Id not found`);
});

module.exports.router = router;
