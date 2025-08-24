const { Buses, Users, Bookings } = require("../models");
const { dbErrorHandler, resObject } = require("../utils");

const addBus = async (req, res) => {
  const { number, totalSeats } = req.body;

  try {
    const bus = await Buses.create({
      number: number,
      totalseats: totalSeats,
      availableSeats: totalSeats,
    });
    res.status(201).json(resObject.success("Bus added", bus));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

const getBuses = async (req, res) => {
  const { id } = req.params;

  try {
    const busInfo = await Buses.findByPk(id, { include: Bookings });
    res.status(200).json(resObject.success("Bus Details", busInfo));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  addBus,
  getBuses,
};
