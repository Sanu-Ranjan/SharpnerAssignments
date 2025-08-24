const { addUsers, getUsers } = require("../controllers/users");

const router = require("express").Router();

router.post("/", addUsers);

router.get("/:id/bookings", getUsers);

module.exports = {
  router,
};
