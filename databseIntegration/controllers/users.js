const db = require("../config/dbConnections");

function validate(...args) {
  for (let val of args) {
    if (val === undefined) {
      return true;
    }
  }
  return false;
}

const addEntries = (req, res) => {
  const { email, name } = req.body;
  const insertQuery = `Insert into users (name,Email) values(?,?)`;

  const isNotValid = validate(email, name);
  if (isNotValid) {
    res.status(400).send(`invalid input Email:${email} name:${name}`);
    return;
  }

  db.connection.config.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.send(err.message);
      db.connection.config.end();
      return;
    }

    console.log("value has been added");
    res.status(200).send(`user with name:${name} and email:${email} added`);
  });
};

const updateEntries = (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  // res.send({ name: name, userId: userId });
  // return;

  const isNotValid = validate(userId, name);
  if (isNotValid) {
    res.status(400).send(`invalid input userId:${userId} name:${name}`);
    return;
  }

  const updateQuery = `UPDATE USERS SET name = ? where userID = ?`;

  db.connection.config.execute(updateQuery, [name, userId], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.connection.config.end();
      return;
    }

    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    console.log(`User details updated`);
    res.status(200).send(`User details updated`);
  });
};

const deleteEntries = (req, res) => {
  const { userId } = req.params;

  const deleteQuery = `DELETE FROM users where userID = ?`;

  db.connection.config.execute(deleteQuery, [userId], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }

    res.status(200).send("user entry deleted");
  });
};

module.exports.addEntries = addEntries;
module.exports.updateEntries = updateEntries;
module.exports.deleteEntries = deleteEntries;
