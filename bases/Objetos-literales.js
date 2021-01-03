const persona = {
  name: "Michael",
  age: 20,
  from: {
    city: "new york",
    latitud: 1020103,
    loguitud: 2342133,
  },
};
console.group("OBJECT");
console.log({ persona });
console.groupEnd();
const persona2 = { ...persona };

console.group("object 2");
console.log(persona2);
console.groupEnd();
