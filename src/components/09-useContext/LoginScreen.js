import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  //Obtener referencia al context
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: new Date().getTime(),
      name: "Michael Rodriguez",
      email: "scottlovos503@gmail.com",
    });
  };
  return (
    <div>
      <h1>Login PAGE</h1>
      <hr />
      <button className="btn btn-primary" type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
