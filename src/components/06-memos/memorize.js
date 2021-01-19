import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>
        <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-outline-dark" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-danger ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
