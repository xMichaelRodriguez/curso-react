import React from "react";
import ReactDOM from "react-dom";
import'./index.css'
import App from "./primeraApp";

const divRoot = document.querySelector("#root");

ReactDOM.render(<App  saludo='Hola que hace prro' />, divRoot);
