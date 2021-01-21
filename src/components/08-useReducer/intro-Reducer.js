//REGLA NO USAR PUSH EN UN REDUCER POR QUE MODIFICA O MUTA UN OBJETO
const initialState = [
  {
    id: 1,
    TODO: "Comprar Pann",
    done: false,
  },
];
/**
 * 1-Reducer no es mas que una simple funcion que recibe 
 * 2-state que si no recibe ningun argumento sera el valor de inicio
 * 3-tambien la accion es que va a modificar el state
 * 4-no puede ser asincrona y sin efectos secundarios
 * 5-siempre debe retornar un state
 * @param {*} state 
 * @param {*} action 
 */
const todoReducer = (state = initialState, action) => {
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  TODO: "Comprar Frijoles xD",
  done: false,
};

//la accion es un objeto literal solamente teniendo una clave con el tipo de accion
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
