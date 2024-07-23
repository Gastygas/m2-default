const mongoose = require ("mongoose");

const validateId = (req,res,next) =>{
    const { id } = req.params;
    if( console.log(mongoose.Types.ObjectId.isValid(id))){
        next()
    } else{
        next({ message:"Id Inválido", statusCode: 400})
    }
}

module.exports = validateId;