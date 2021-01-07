import { getHeroeById } from "./08-imp-exp";


export const getHeroeByIdAsync=(id)=>{
    const promesa= new Promise((resolve,reject)=>{
        setTimeout(() => {
          const heroe=  getHeroeById(id)

          heroe?resolve(heroe):reject("el heroe no existe")
            /* resolve(heroe); */
            //reject("no se pudo encontrar el heroe")
        }, 1500);
    })
    return promesa
}

