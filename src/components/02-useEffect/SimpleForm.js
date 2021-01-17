import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export default function SimpleForm() {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
   // console.log("HOLA");
  }, []);
  useEffect(() => {
    //console.log("formState cambio");
  }, [formState]);
  useEffect(() => {
    //console.log("email cambio");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="You name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="You email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {(name==="123") && <Message />}
    
    </>
  );
}
