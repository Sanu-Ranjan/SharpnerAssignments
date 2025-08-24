const { Buses, Users, Bookings } = require("../models");
const { dbErrorHandler, resObject } = require("../utils");

const createBooking = async (req, res) => {
  const { busId, userId, seatNumber } = req.body;

  try {
    const booking = await Bookings.create({
      seatNumber: seatNumber,
      userId: userId,
      busId: busId,
    });

    res.status(200).json(resObject.success("Booking done", booking));
  } catch (error) {
    dbErrorHandler(error, res);
  }
};

module.exports = {
  createBooking,
};
