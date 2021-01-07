import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas de Funciones", () => {
  test("getUser  Debe retornar un objeto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const userTest = getUser();
    expect(user).toEqual(userTest);
  });
  test("getUsuarioActivo  Debe retornar un objeto", () => {
    const userActivoTest = getUsuarioActivo("Michael");
    const userActivo = {
      uid: "ABC567",
      username: userActivoTest["username"],
    };

   
    expect(userActivo).toEqual(userActivoTest);
  });
});
