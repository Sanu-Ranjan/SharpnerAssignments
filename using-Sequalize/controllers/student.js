const db = require("../config/dbConnection");

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
    const { email, name } = req.body;
    const student = await Student.create({
      email: email,
      name: name,
    });

    res.status(201).json({
      success: true,
      data: {
        email: email,
        name: name,
      },
      message: "Student added succesfully",
    });
  } catch (err) {
    return dbErrorHandler(err, res);
  }
};

const updateEntries = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
};

module.exports.addEntries = addEntries;
