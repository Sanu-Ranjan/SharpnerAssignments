const { Student } = require("./students");
const { Idcard } = require("./idcard");
const { Department } = require("./department");

Student.hasOne(Idcard);
Idcard.belongsTo(Student);

Department.hasMany(Student);
Student.belongsTo(Department);

module.exports.Student = Student;
module.exports.Idcard = Idcard;
