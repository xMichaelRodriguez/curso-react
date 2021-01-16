import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement,reset } = useCounter(100);
  return (
    <div>
      <h1>HOla CounterWithCustomHook: {state}</h1>
      <hr />
      <button onClick={()=>increment(2)} className="btn btn-outline-dark">
        +1
      </button>
      <button onClick={reset} className="btn btn-outline-dark">
        Reset
      </button>
      <button onClick={()=>decrement(2)} className="btn btn-outline-dark">
        -1
      </button>
    </div>
  );
};
