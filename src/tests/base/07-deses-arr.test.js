import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en desestructuracion de arreglos", () => {
  test("retornaArreglo debe retornar un string y un numero", () => {
    const [letras, numero] = retornaArreglo();

    expect(typeof letras).toBe("string");
    expect(typeof numero).toBe("number");
  });
});
