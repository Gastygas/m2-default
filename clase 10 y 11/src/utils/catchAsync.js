//funcion de orden superior(funcion que recibe a funcion y le modifica/mejora algo para que funcione better)

const catchAsync = (controller) =>{
return (req,res,next) => {
    controller(req,res).catch((err) => next(err));
};
}

module.exports = catchAsync;