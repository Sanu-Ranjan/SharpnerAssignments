const db = require("../config/dbConnections");

const isNotValid = (...args) => args.some((val) => val === undefined);

const isMissing = (field) => (field === undefined ? "Missing" : "Provided");

const dbErrorHandler = (err, res) => {
  res.status(500).json({
    success: false,
    error: "Database operation failed",
    details: err.message,
  });
};

const seatInfo = (req, res) => {
  const { availableSeats } = req.params;

  const query = `SELECT * FROM buses WHERE availableSeats > ?`;

  db.connection.config.execute(query, [availableSeats], (err, result) => {
    if (err) return dbErrorHandler(err, res);

    res.status(200).json({
      success: true,
      data: result,
      message: `${result.length} Buses Available`,
    });
  });
};

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const notValid = isNotValid(busNumber, totalSeats, availableSeats);
  if (notValid)
    return res.status(400).json({
      success: false,
      error: "Missing fields",
      details: {
        busNumber: isMissing(busNumber),
        totalSeats: isMissing(totalSeats),
        availableSeats: isMissing(availableSeats),
      },
    });

  const query =
    "INSERT INTO buses (busNumber,totalSeats,availableSeats) VALUES( ? , ? , ?)";

  db.connection.config.execute(
    query,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) return dbErrorHandler(err, res);

      res.status(201).json({
        success: true,
        data: {
          busNumber: busNumber,
          totalSeats: totalSeats,
          availableSeats: availableSeats,
        },
        message: "Bus added successfully",
      });
    }
  );
};

module.exports.addBus = addBus;
module.exports.seatInfo = seatInfo;
