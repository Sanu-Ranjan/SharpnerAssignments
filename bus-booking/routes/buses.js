const { addBus, getBuses } = require("../controllers/buses");

const busRouter = require("express").Router();

//post/ add bus
busRouter.post("/", addBus);

//get/ find busdetails
busRouter.get("/:id/bookings", getBuses);

module.exports = {
  busRouter,
};
