import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./primeraApp"; */
import Counter from "./counterApp";
const divRoot = document.querySelector("#root");

ReactDOM.render(
  <>
    {/* <App saludo="Hola que hace prro" /> */}
    <Counter numero={3}/>
  </>,
  divRoot
);
