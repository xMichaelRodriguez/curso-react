import React from "react";
import ReactDOM from "react-dom";
/* import { CounterApp } from "./components/01-useState/counterApp"; */
import './index.css'
import { CounterWithCustomHook } from "./components/01-useState/CounterWithCustomHook";
/* import { HookApp } from "./hookApp";
 */
ReactDOM.render(<CounterWithCustomHook />, document.getElementById("root"));
