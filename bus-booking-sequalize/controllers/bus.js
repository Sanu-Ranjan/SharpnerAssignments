const { Buses } = require("../models/buses");
const { Op } = require("sequelize");

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

const addBus = async (req, res) => {
  const { number, availableSeats } = req.body;

  try {
    const bus = await Buses.create({
      number: number,
      availableSeats: availableSeats,
    });
    res.status(201).json({
      success: true,
      data: bus,
      message: "Bus detail added succesfully",
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const getAvailableBus = async (req, res) => {
  const { seats } = req.params;

  try {
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });
    res.status(200).json({
      success: true,
      data: buses,
      message: `${buses.length} Buses found`,
    });
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports.addBus = addBus;
module.exports.getAvailableBus = getAvailableBus;
