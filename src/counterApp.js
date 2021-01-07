import PropTypes from 'prop-types';
import React, { useState } from "react";


const Counter = ({ numero=10 }) => {
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

      <button onClick={handleAdd} type="button">
        Clickeame
      </button>
      <button onClick={handleReset} type="button">
        Recet
      </button>
      <button onClick={handleSubtrack} type="button">
        resta
      </button>
    </>
  );
};

Counter.propTypes = {
  numero: PropTypes.number,
};
export default Counter;
