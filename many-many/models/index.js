const { Courses } = require("./courses");
const { Students } = require("./students");
const { StudentCourses } = require("./studentCourses");

Students.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Students, { through: StudentCourses });

module.exports = {
  Students,
  Courses,
  StudentCourses,
};
