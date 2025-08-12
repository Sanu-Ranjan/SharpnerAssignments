const { dbconnect } = require("../config/dbconnect");

const StudentCourses = dbconnect.define("StudentCourses", {});

module.exports = {
  StudentCourses,
};
