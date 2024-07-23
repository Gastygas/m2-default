const express = require("express")
const router = require("./routes/index.js")
const morgan = require("morgan")
const cors = require("cors")



const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

// app.use((req,res,next)=>{
//     throw Error("Un error forzado en el middleware")
// }) //Express no puede manejar los errores asincronos

app.use(router)

app.use((err,req,res,next) =>{
    res.stauts(err.statusCode || 500).json({error:err.message})
})
module.exports = app