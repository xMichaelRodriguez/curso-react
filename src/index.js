import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./primeraApp";
 import Counter from "./counterApp"; 
const divRoot = document.querySelector("#root");

ReactDOM.render(
  <>
   {/*  <App saludo="hola sou tu pap" /> */}
     <Counter numero={10}/> 
  </>,
  divRoot
);

