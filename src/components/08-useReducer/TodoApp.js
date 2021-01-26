import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
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

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleToggle = (todoId) => {
    dispatch({
      type: "TOGGLE",
      payload: todoId,
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }
    const newTask = {
      id: new Date().getTime(),

      desc: "Aprender NodeJS",

      done: false,
    };

    const action = {
      type: "ADD",

      payload: newTask,
    };

    dispatch(action);

    reset();
  };
  return (
    <>
      <h1>Todo-App ( {todos.length} )</h1>
      <hr />

      <div className="form-row">
        <div className="col-md-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Aprender..."
              value={description}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary btn-block mt-1 " type="submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
