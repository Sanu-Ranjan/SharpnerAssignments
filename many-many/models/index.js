const { Courses } = require("./courses");
const { Students } = require("./students");
const { StudentCourses } = require("./studentCourses");
const { Idcard } = require("./idcards");

//many to many relation ship
Students.belongsToMany(Courses, { through: StudentCourses });
Courses.belongsToMany(Students, { through: StudentCourses });

//one to one
Students.hasOne(Idcard);
Idcard.belongsTo(Students);

module.exports = {
  Students,
  Courses,
  StudentCourses,
  Idcard,
};
