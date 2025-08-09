const { getUsers, addUser, deleteUser } = require("../controllers/user");

const router = require("express").Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);

module.exports.router = router;
