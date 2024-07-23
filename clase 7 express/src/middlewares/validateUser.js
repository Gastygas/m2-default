const validateUser = (req,res,next) =>{
    const {name} = req.body;

    if(!name){
        // next("Nombre inválido o no provisto")  //si hago next con un mensaje, express ya sabe que es un error y
            //lo envia a un manejador de errores que nos manda el mensaje que le pusimos.
             //el erorr que tiene es que no es un error del status 500, sino del 400(del cliente)
        return res.status(401).json({
            error: "Falta el dato del nombre",
        }); //tambien puede responder, entonces enviamos la respuesta retornando. No es recomendable igual
    } else{
        next() // si esta todo bien, que la solicitud siga su recorrido
    }
}

module.exports = validateUser