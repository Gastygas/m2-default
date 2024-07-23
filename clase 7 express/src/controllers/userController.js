const usersService = require("../services/userService")

module.exports ={
    getAllUsers: async (req,res) => {
        // res.status(200).send("Estamos enviado usuariosinfooo")
        try {
            const users = await usersService.getUsers()
            res.status(200).json(users)
            
        } catch (error) {
            res.status(500).json({
                error: "Eror Interno virgooo"
            })
        }
    },

    createUser: async(req,res) =>{
        try {
            const {name} = req.body; //este req.body es en el body de donde se carga el server
            await usersService.createUser(name)
            res.status(201).json({
                message: "User has been created succesfuly"
            })
            
        } catch (error) {
            res.status(500).json({
                message : "Error, it didn't work"
            })
        }
    },
}