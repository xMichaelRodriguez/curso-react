import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0]; //si existe la data retorna la data en la posicion 0
  return (
    <div>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {loading ? (
        <div className="alert alert-primary text-center" role="alert">
          Loading...
        </div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0 ">{quote}</p>
          <footer className="blockquote-footer ">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-info" onClick={increment}>Next Quote</button>
    </div>
  );
};
