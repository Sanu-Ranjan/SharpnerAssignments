const {
  studentList,
  findStudent,
  addStudent,
  updateDetails,
} = require("../controllers/student");

const router = require("express").Router();

router.get("/", studentList);

router.get("/:id", findStudent);

router.post("/", addStudent);

router.put("/:id", updateDetails);

// router.delete("/:id");

module.exports.router = router;
