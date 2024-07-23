const mongoose = require("mongoose");

const dbCon = async() =>{
    //realizar la conexion con la base de datos
   await mongoose.connect("mongodb+srv://gaston:qLyXBm9AMpBV4kDg@gastonjs.nyw04l3.mongodb.net/?retryWrites=true&w=majority&appName=GastonJS");

};

module.exports =dbCon;