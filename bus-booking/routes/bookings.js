const { createBooking } = require("../controllers/bookings");

const bookingsRouter = require("express").Router();

bookingsRouter.post("/", createBooking);

module.exports = {
  bookingsRouter,
};
