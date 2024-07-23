const app = require("./src/server")

// listen(puerto)
// escucha solicitudes

app.listen(3000,() => {
    console.log("servidor escuchando en el puerto 3000");
})