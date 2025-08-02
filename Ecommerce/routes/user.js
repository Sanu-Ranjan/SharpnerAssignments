const router = require("express").Router();
const userController = require("../controllers/user");
router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  .post("/", userController.addUser);

module.exports.router = router;
