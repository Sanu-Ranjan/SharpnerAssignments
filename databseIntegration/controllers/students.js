const db = require("../config/dbConnections");

const addEntries = (req, res) => {
  const { email, name } = req.body;
  const insertQuery = `Insert into users (name,Email) values(?,?)`;

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

module.exports.addEntries = addEntries;
