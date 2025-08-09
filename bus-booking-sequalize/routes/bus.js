const { addBus, getAvailableBus } = require("../controllers/bus");

const router = require("express").Router();

router.get("/available/:seats", getAvailableBus);

router.post("/", addBus);

module.exports.router = router;
