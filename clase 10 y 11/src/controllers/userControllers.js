const userService = require("../services/userServices");
const catchAsync = require("../utils/catchAsync");

const getUsers =  async (req,res) =>{
    
    const users = await userService.getUsers();
    res.status(200).json(users)
    
}
const getUserById = async(req,res) =>{
    const {id} = req.params;
    ///req.params detecta el parametro de la url que estamos enviando
     const user = await userService.getUserById(id);
     res.status(200).json(user)
}
const getUserByName =  async(req,res) =>{
    const {name} = req.body;
    const user = await userService.findUserByName(name);
    res.status(200).json(user)
}

const  createUser = async(req,res) =>{
    const {name,email,age} = req.body;
    const newUser = await userService.createUsers({name,email, age});
    res.status(201).json(newUser)
}

const addVehicle = async(req,res) =>{
    const {userId,vehicleId} = req.body;
    await userService.addVehicle({userId,vehicleId})
    res.status(200).json("Todo En Orden")
}

module.exports = {
    getUsers : catchAsync(getUsers),
    getUserById : catchAsync(getUserById),
    getUserByName : catchAsync(getUserByName),
    createUser : catchAsync(createUser),
    addVehicle : catchAsync(addVehicle),
}