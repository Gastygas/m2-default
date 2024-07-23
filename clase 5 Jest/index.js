// const sumar = (a,b) =>{
//     if(typeof a !== "number" || typeof b !== "number") return null;
//     const suma = a + b;
//     return suma;
// };

// const calcularTotal = (items) => {
//     if(!items.lengt){
//         throw Error("Factura Invalida")
//     }
//     let total = 0
//     for(let item of items){
//         total += item.quantity * item.price
//     }
//     return total
// }

// module.exports = {
//     sumar,
//     calcularTotal,
// };

const {getItems} = require("./database")

const calcularTotal = (getItems) =>{
    const items = getItems()

    let total = 0;

    for(let item of items) total += item.quantity * item.price

    return total
};

module.exports = {
    calcularTotal,
}