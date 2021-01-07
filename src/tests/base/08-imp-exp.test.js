import { getHeroeById } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe("Pruebas de funciones de Heroes", () => {
  
  test("debe retornar un herore por id", () => {
    const id = 1;
      const heroe = getHeroeById(id); 
    const heroeData = heroes.find(h => h.id === id); 

    expect(heroe).toEqual(heroeData)
  });
  test("debe retornar undefined si el heroe no existe", () => {
    const id = 10; 
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });
}); 

