import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const [boxsize, setBoxsize] = useState({});
  const { author, quote } = !!data && data[0]; //si existe la data retorna la data en la posicion 0

  const pTag = useRef();
  useLayoutEffect(() => {
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);
  return (
    <div>
      <h1>MultipleCustomHooks</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0 ">
          {quote}
        </p>
        <footer className="blockquote-footer ">{author}</footer>
      </blockquote>

        <pre>{JSON.stringify(boxsize,null,3)}</pre>
      <button className="btn btn-info" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};
