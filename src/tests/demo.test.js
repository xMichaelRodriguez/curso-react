test("debe ser true", () => {
  //inicializacion,Arrange
  const isActivo = true;

  //actuacion act

  
  //acercion acert
  if (isActivo) {
    throw new Error("No Esta Activo");
  }
});
