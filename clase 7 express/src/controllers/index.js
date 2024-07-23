// En este modulo van a estar las funciones que establecen la logica de negocio 
// de cada una de las rutas

//Esta funcion define QUE vamos a hacer pero no lo va a HACER
//tambien maneja errores

// para esa ruta GET /users => vamos a ir a la base de datos a pedir la informacion de los 
//usuarios y responder a los clientes con la informacion obtenida

const userController = (req,res) => {
    res.status(200).send("Estamos recibiendo tu solicitud para tener datos de usuario")    
}

const postController = (req,res) => {
    res.status(200).send("Enviamos info sobre post")
}



module.exports = {
    userController,
    postController,
};