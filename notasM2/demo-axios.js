//Hacemos "npm install axios" en la terminal
const axios = require("axios")

axios.get("https://students-api.up.railway.app/movies"); 
//siempre retorna una promesa
// cuando axios realiza una solicitud y obtiene un resultado favorable, resuelve la promise
// cuando axios realiza una solicitud y NO obtiene un resultado favorable, rechazada la promise

// ! IMPORTANTE PARA LOS METODOS POST! (post envia informacion)
axios.post("la url que corresponda",{
    title : "Titanic",
    year:"2003"
})

//! actualizamos los valores con put
axios.put("URL",{

})

//! elimina 
axios.delete("URL")

// nvm list para instalar diferentes versiones de node





