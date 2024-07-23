const users = [
    {
        id:1,
        name:"Jorge"
    },
    {
        id:2,
        name:"Gordo"
    },
    {
        id:3,
        name:"Gasty"
    },
]

let id = 4;
module.exports= {
    getUsers : async () =>{

        //Consultar a una Base De Datos
        //Realizar una solicutd a u nservicio externo
        // Leeran la informacion de un archivo
       
        return users
    },
    createUser: async(name) =>{
        const newUser = {
            id,
            name
        };
        id++;
        users.push(newUser)
    },
}