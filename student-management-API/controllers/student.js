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

module.exports.studentList = studentList;
module.exports.findStudent = findStudent;
