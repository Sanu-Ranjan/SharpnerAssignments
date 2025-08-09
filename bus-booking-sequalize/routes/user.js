const { getUsers, addUser } = require("../controllers/user");

const router = require("express").Router();

router.get("/", getUsers);
router.post("/", addUser);

module.exports.router = router;
