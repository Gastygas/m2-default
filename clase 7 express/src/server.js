const express = require("express")
const router = require("./routes/index")
const morgan = require("morgan")
const cors = require("cors")


const app = express()
// o const server

// Acá quiere utilizar el middleware de Morgan
app.use(morgan("dev"))
// el .use significa "quiero que la solicitud pase por aca"

app.use(cors())
// se usa el cors para que el host permita a que entren a la pagina de cualquier lado
// sino como es deconocido niega la entrada

app.use(express.json())
// convierte la informacion que viene en .json a un objeto de javascript

//armamos nuestro middleware de esta manera
app.use((req,res,next)=>{
    console.log("Pasamos por nuestro middleware amigoo");
    next(); // con next liberamos la req asi no se trabe la pagina
})

app.use(router)


module.exports = app