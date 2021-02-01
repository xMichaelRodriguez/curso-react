import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {
  //si la data no es la que esta en este arreglo retorna un error
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`publisher "${publisher}" no es valido`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
