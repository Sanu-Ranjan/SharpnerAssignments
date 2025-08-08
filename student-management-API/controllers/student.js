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

const updateDetails = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const query = `UPDATE students SET name = ?, email = ?, age = ?  WHERE id = ?`;

  db.config.execute(query, [name, email, age, id], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    res.status(200).json({
      success: true,
      data: {
        name: name,
        email: email,
        age: age,
      },
      message: "Student details updated successfully",
    });
  });
};

const deleteEntries = (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM students WHERE id = ?`;

  db.config.execute(query, [id], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        error: "Student not found",
        resource: "id",
        userID: id,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: id,
      },
      message: `Student details with id ${id} deleted`,
    });
  });
};

module.exports.studentList = studentList;
module.exports.findStudent = findStudent;
module.exports.addStudent = addStudent;
module.exports.updateDetails = updateDetails;
module.exports.deleteEntries = deleteEntries;
