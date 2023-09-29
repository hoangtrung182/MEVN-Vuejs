const UserController = require("../controllers/user.controller");

const router = require("express").Router();

router.get("/users", UserController.getAllUsers);

router.post("/register", UserController.register);

router.post("/login", UserController.login);

module.exports = router;