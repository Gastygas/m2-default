// aquí vamos a defenir las rutas a través de las cuáles nos podemos comunicar

// Tengo definida la solicitud a GET /users => controlador

const {Router} = require("express")
const userRouter = require("./userRouter")
const postRouter = require("./postRouter")

const router = Router()

//Creamos una ruta, la callback es un controlador
// router.get("/",() => {})

router.use("/users",userRouter)
router.use("/posts",postRouter)



module.exports = router

