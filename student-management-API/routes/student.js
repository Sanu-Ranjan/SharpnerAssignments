const {
  studentList,
  findStudent,
  addStudent,
} = require("../controllers/student");

const router = require("express").Router();

router.get("/", studentList);

router.get("/:id", findStudent);

router.post("/", addStudent);

// router.put("/:id");

// router.delete("/:id");

module.exports.router = router;
