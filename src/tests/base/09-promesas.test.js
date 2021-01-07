import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("Prueba con Primise", () => {
  test("getHeroeByIdAsync Retorna un heroe async", (done) => {
    const id = 2;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[1]);
      done();
    });
  });

  test("getHeroeByAsync debe obtener error si el heore no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("el heroe no existe");
      done();
    });
  });
});
