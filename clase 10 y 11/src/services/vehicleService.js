const Vehicle = require("../models/Vehicle");

module.exports = {
    getAllVehicles: async() =>{
        const vehicle = await Vehicle.find();
        return vehicle;
    },

    createVehicle: async(vehicle) =>{
        const newVehicle = await Vehicle.create(vehicle);
        return newVehicle;
    },
};