const { studentList, findStudent } = require("../controllers/student");

const router = require("express").Router();

router.get("/", studentList);

router.get("/:id", findStudent);

// router.post("/");

// router.put("/:id");

// router.delete("/:id");

module.exports.router = router;
