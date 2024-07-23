const formatAge = require("../helpers/formatAge");
const User = require("../models/User")

module.exports = {
    getUsers : async() =>{
        const users = await User.find().populate("vehicle");
        return users;
    },

    getUserById : async (id) => {
        const user = await User.findById(id)
        return user
    },

    findUserByName: async(name) =>{
        const user = await User.findOne({name})
        return user
    },

    createUsers : async(user) =>{
     const newUser = await User.create({...user, age: formatAge(user.age)})
     return newUser;
    },

    addVehicle: async({userId,vehicleId}) =>{ //data
        // const {userId, vehicleId} = data
        const user = await User.findById(userId)
        user.vehicle = vehicleId //me traje un usuario, modifique una de sus propiedad
        await user.save() //y guarde el cambio que acabamos de hacer

        return user
    }

};
