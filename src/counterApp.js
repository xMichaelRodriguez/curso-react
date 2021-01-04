import React, { useState } from "react";
import propTypes from "prop-types";
const Counter = ({ numero }) => {
  //useState hook
    const [counter, setCounter] = useState(numero); //es un arreglo con un valor y una funcion
  //suma
  const handleAdd = (e) => {
    /*   setCounter(counter + 1); */
    setCounter((c) => c + 1);
  };
  //resta
  const handleSubtrack = (e) => {
    setCounter(counter - 1);
  };

  //reset
  const handleReset = (e) => {
    setCounter(numero);
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      {/*  <h4>{numero}</h4> */}
      <button onClick={handleAdd} type="button">
        Clickeame
      </button>
      <button onClick={handleReset} type="button">Recet</button>
      <button onClick={handleSubtrack} type="button">
        resta
      </button>
    </>
  );
};

Counter.prototypes = {
  numero: propTypes.number,
};
export default Counter;
