import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";

import Swal from "sweetalert2";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
const init = () => {
  //si existen los todo los retorna si no retorna un arreglo vacio
  return JSON.parse(localStorage.getItem("todos")) || [];
  /* return [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ]; */
};

export const TodoApp = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * Llama a la funcion dispatch del reducer para eliminar
   * @param {String} id 
   */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const action = {
          type: "DELETE",

          payload: id,
        };

        dispatch(action);
        Swal.fire("Deleted!", "Your task has been deleted.", "success");
      }
    });
  };
  /**
   * Llama a la funcion dispatch del reducer para alternar una clase
   * @param {String} todoId 
   */
  const handleToggle = (todoId) => {
    dispatch({
      type: "TOGGLE",
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  return (
    <>
      <h1>Todo-App ( {todos.length} )</h1>
      <hr />

      <div className="form-row">
        <div className="col-md-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-md-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  );
};
