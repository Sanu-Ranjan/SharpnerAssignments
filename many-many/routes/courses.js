const router = require("express").Router();

const {
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  addCourseStudent,
} = require("../controllers/courses");

// / --get--getCourse
router.get("/", getCourse);
// / --post--addCourse
router.post("/", addCourse);
// /:id --put--updateCourse
router.put("/:id", updateCourse);
// /:id --delete--deleteCourse
router.delete("/:id", deleteCourse);

router.post("/associate", addCourseStudent);
//exports router
module.exports = {
  router,
};
