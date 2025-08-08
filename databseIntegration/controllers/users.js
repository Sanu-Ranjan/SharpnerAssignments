const db = require("../config/dbConnections");

const validate = (...args) => args.some((val) => val === undefined);
const isMissing = (field) => (field === undefined ? "Missing" : "Provided");
const dbErrorHandler = (err, res) => {
  res.status(500).json({
    success: false,
    error: "Database operation failed",
    details: err.message,
  });
};

const addEntries = (req, res) => {
  const { email, name } = req.body;
  const insertQuery = `INSERT INTO users (name,Email) VALUES(?,?)`;

  const isNotValid = validate(email, name);
  if (isNotValid) {
    res.status(400).json({
      success: false,
      error: "Missing required fields",
      details: {
        email: isMissing(email),
        name: isMissing(name),
      },
    });
    return;
  }

  db.connection.config.execute(insertQuery, [name, email], (err) => {
    if (err) return dbErrorHandler(err, res);
    res.status(201).json({
      success: true,
      data: {
        name: name,
        email: email,
      },
      message: "User created successfully",
    });
  });
};

const updateEntries = (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  const isNotValid = validate(userId, name);
  if (isNotValid) {
    res.status(400).json({
      success: false,
      error: "Missing Required Fields",
      details: {
        userId: isMissing(userId),
        name: isMissing(name),
      },
    });
    return;
  }

  const updateQuery = `UPDATE users SET name = ? WHERE userID = ?`;

  db.connection.config.execute(updateQuery, [name, userId], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    if (result.affectedRows === 0) {
      res.status(404).json({
        success: false,
        error: "Resource not found",
        details: {
          resource: "userId",
          id: userId,
        },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: userId,
        name: name,
      },
      message: "Operation completed successfully",
    });
  });
};

const deleteEntries = (req, res) => {
  const { userId } = req.params;

  const deleteQuery = `DELETE FROM users WHERE userID = ?`;

  db.connection.config.execute(deleteQuery, [userId], (err, results) => {
    if (err) return dbErrorHandler(err, res);

    if (results.affectedRows === 0) {
      res.status(404).json({
        success: false,
        error: "User not found",
        resource: "userId",
        userID: userId,
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        userID: userId,
      },
      message: "User deleted successfully",
    });
  });
};

module.exports.addEntries = addEntries;
module.exports.updateEntries = updateEntries;
module.exports.deleteEntries = deleteEntries;
