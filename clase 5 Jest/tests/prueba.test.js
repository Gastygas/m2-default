const {calcularTotal} = require("../index")


const mockGetItems = jest.fn(() =>{
    return[
        {name : "Producto A", price: 10, quantity : 2},
        {name : "Producto B", price: 20, quantity : 3},
    ];
});

describe("En la funcion CalcularTotal", () => {
    it("La funcion 'getItems' debe ejecutarse al menos una vez",()=>{
        calcularTotal(mockGetItems);
        expect(mockGetItems).toHaveBeenCalled();
    });
});