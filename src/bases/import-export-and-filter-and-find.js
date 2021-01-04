import { heroes } from "../data/heroes";

/**
 * find recibe una callback que maneja 3 argumentos
 * donde 2 son obcionales y uno obligatorio
 * los cuales son el elemento,index y el thisArg
 * aqui se hace un find al arreglo heroes
 * recibe una callback con el argumento heroe que seria -
 * el elemento que se esta recorriendo actualmente
 * y que retorna un valor true o false
 * dicho valor pasa por la condicion de que el argumento de -
 * la funcion principal sea igual a un key del objeto
 * en el que se busca pasandole el argumento de la callback
 * @param {Int | String} id - representa el indice del arreglo
 */
export const getHeroe = (id) => {
  return heroes.find((heroe) => {
    return id === heroe.id;
  });
};

/**
 * Lo mismo que el find
 * lo unico que crea un nuevo arreglo
 * con lo que cumpla con el filtro
 * @param {String} owner -> Representa el owner del heroe
 */
export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => {
    return heroe.owner === owner;
  });
};
