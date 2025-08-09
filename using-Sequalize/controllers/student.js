const db = require("../config/dbConnection");
const { Idcard } = require("../models");
const { Department } = require("../models/department");

const { Student } = require("../models/students");

const dbErrorHandler = (err, res) => {
  res.status(500).json({
    success: false,
    error: "Database operation failed",
    details: {
      error: err,
      message: err.message,
    },
  });
};

const addEntries = async (req, res) => {
  try {
    const { email, name } = req.body.student;
    const { number } = req.body.idCard;
    const { depName } = req.body.department;

    const department = await Department.create({
      name: depName,
    });
    const student = await Student.create({
      email: email,
      name: name,
      DepartmentId: department.id,
    });

    const idCard = await Idcard.create({
      number: number,
      StudentId: student.id,
    });

    res.status(201).json({
      success: true,
      data: { student, idCard, department },
      message: "Student added succesfully",
    });
  } catch (err) {
    return dbErrorHandler(err, res);
  }
};

const updateEntries = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    let students = await Student.findByPk(id);
    if (!students)
      return res.status(404).json({
        success: false,
        error: "No records found",
        details: {
          id: id,
        },
      });

    students.name = name;
    await students.save();
    res.status(200).json({
      success: true,
      data: students,
      message: "Student details updated",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const deleteEntries = async (req, res) => {
  const { id } = req.params;

  try {
    const students = await Student.destroy({
      where: {
        id: id,
      },
    });

    if (!students) {
      return res.status(404).json({
        success: false,
        error: "No records found",
        details: {
          id: id,
        },
      });
    }
    res.status(200).json({
      success: true,
      data: students,
      message: "Student record deletd Successfully",
    });
  } catch (error) {
    dbErrorHandler(err, res);
  }
};

module.exports.addEntries = addEntries;
module.exports.updateEntries = updateEntries;
module.exports.deleteEntries = deleteEntries;
