export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":

      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE":

      return state.map((todo) =>
      
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );


    /* forma larga de hacerlo
     case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,

            done: !todo.done,
          };
        } else {
          return todo;
        }
      }); */

    default:
      return state;
  }
};
