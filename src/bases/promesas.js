import { getHeroe } from "./bases/import-export-and-filter-and-find";
/* const promesa= new Promise((resolve,reject)=>{
    setTimeout(() => {
      const heroe=  getHeroe(2)
        resolve(heroe);
        //reject("no se pudo encontrar el heroe")
    }, 2000);
});

promesa.then((message)=>{
    console.log(message)
}).catch(err =>{
    console.warn(err)
}) */

const getHeroeById=(id)=>{
    const promesa= new Promise((resolve,reject)=>{
        setTimeout(() => {
          const heroe=  getHeroe(id)

          heroe?resolve(heroe):reject("el heroe no existe")
            /* resolve(heroe); */
            //reject("no se pudo encontrar el heroe")
        }, 2000);
    })
    return promesa
}

/* (hero)=>{
    console.log(hero) */
getHeroeById(1).then(console.log).catch(console.warn)