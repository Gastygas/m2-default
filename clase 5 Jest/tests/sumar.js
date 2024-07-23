const {sumar} = require("../index")

const mockSumar = jest.fn(sumar)

describe("La funcion 'sumar'",() =>{
    it("Debe retornar null si no es un numero",()=>{
        expect(mockSumar(1,true)).toBe(null)
        expect(mockSumar("hola",2)).toBe(null)
        expect(mockSumar("hola","mundo")).toBe(null)
    })

    it("Debe retornar correctamente el result de la suma",()=>{
        expect(mockSumar(4,4)).toBe(8)
        expect(mockSumar(-6,-6)).toBe(-12)
        expect(mockSumar(-6,6)).toBe(0)
    })

    it("Debe haber registrado correctly",() =>{
        expect(mockSumar).toHaveBeenCalledWith(4,4)
    })
})