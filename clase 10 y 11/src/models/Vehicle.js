const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
    patente : String,
    marca: String,
})

const Vehicle = mongoose.model("Vehicle",vehicleSchema);

module.exports = Vehicle;