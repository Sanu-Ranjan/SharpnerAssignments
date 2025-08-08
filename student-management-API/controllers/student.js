const db = require("../config/dbconfig").connection;

const dbErrorHandler = (err, res) => {
  res.status(500).json({
    success: false,
    error: "Database operation failed",
    details: {
      message: err.message,
    },
  });
};

const studentList = (req, res) => {
  const query = `SELECT * FROM students`;

  db.config.execute(query, (err, result) => {
    if (err) return dbErrorHandler(err, res);

    res.status(200).json({
      success: true,
      data: result,
      message: "Students List fetched",
    });
  });
};

const findStudent = (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM students WHERE id= ? `;

  db.config.execute(query, [id], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    res.status(200).json({
      success: true,
      data: result,
      message: ` ${result.length} Students details fetched`,
    });
  });
};

const addStudent = (req, res) => {
  const { name, email, age } = req.body;

  const query = `INSERT INTO students (name, email, age) VALUES ( ? , ? , ?)`;

  db.config.execute(query, [name, email, age], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    res.status(201).json({
      success: true,
      data: {
        name: name,
        email: email,
        age: age,
      },
      message: "Student added successfully",
    });
  });
};

module.exports.studentList = studentList;
module.exports.findStudent = findStudent;
module.exports.addStudent = addStudent;
