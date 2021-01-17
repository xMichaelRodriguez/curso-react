import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function FormWithCustomHook() {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.group("FORM");
    console.log(formValues);
    console.groupEnd();
  };
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="******"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary btn-block"> Guardar</button>
    </form>
  );
}
