import { getSaludo } from "../../base/02-template-string";

describe("Pruebas para 02-template-string.test.js", () => {
  test('getSaludo debe de retornar Hola "name"', () => {
    const nombre = "Michael";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe("Hola " + nombre);
  });


  test("getSaludo debe retornar Hola carlos si no hay argumento",()=>{
      const saludo=getSaludo();

      expect(saludo).toBe("Hola Carlos")

  })
});

