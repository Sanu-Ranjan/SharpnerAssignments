const router = require("express").Router();

const busController = require("../controllers/buses");

router.get("/available/:availableSeats", busController.seatInfo);

router.post("/", busController.addBus);

module.exports.router = router;
