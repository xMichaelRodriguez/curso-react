describe("Pruebas en el archivo demo.test.js", () => {
  test("deben ser iguales los strings", () => {
    //PASO 1:inicializacion,Arrange
    const mensaje = "hola mundo";

    //PASO 2. estimulo. actuacion act
    const mensaje2 = `hola mundo`;

    //PASO 3. Observar el comportamiento. acercion acert
    expect(mensaje).toBe(mensaje2);
  });
});
