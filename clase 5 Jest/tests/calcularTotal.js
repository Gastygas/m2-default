//[{name : "Producto A", price: 10, quantity : 2}];

// const {calcularTotal} = require("../index");

// describe("The function CalcularTotal",() =>{
//     it("Debe calcular el total de una factura con un solo item",()=>{
//         expect(calcularTotal([{name : "Producto A", price: 10, quantity : 2}])).toEqual(20)
//     })
//     it("Debe calcular el total de una factura con varios items",() =>{
//         expect(calcularTotal([
//             {name : "Producto A", price: 10, quantity : 2},
//             {name : "Producto B", price: 20, quantity : 3},
//             {name : "Producto C", price: 30, quantity : 4},
//         ])).toEqual(200);
//     });
//     it("Debe arrojar un error 'factura invalida' en caso de recibir un array vacio",() =>{
//         expect(() => calcularTotal([])).toThrowError("Factura Invalida");
//     });
// });
