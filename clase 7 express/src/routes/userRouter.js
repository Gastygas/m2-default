const { Router } = require("express")
const userController = require("../controllers/userController")
const validateUser = require("../middlewares/validateUser")

const userRouter = Router()

userRouter.get("/",userController.getAllUsers)

userRouter.post("/",validateUser, userController.createUser)
    //añadimos validateUser para que valida antes de seguir el recorrido;
module.exports = userRouter