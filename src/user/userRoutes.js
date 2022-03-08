const { Router } = require("express");
const { addUser } = require("./userControllers");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

module.exports = userRouter;
