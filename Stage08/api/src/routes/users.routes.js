const { Router } = require("express");

const UsersControllers = require("../controllers/UsersController.js");

const usersRoutes = Router();


function myMiddleware(request, response, next) {
  console.log("Você passou pelo Middleware");
  if(!request.body.isAdmin){
    return response.json({ message: "user unauthorized" });
  };
  next();
}


const usersController = new UsersControllers();

usersRoutes.post("/", myMiddleware, usersController.create);

module.exports = usersRoutes;