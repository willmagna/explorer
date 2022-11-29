const { Router } = require("express");

const UsersControllers = require("../controllers/UsersController.js");

const usersRoutes = Router();

const usersController = new UsersControllers();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;