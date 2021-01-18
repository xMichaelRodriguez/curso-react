import React, { useRef } from "react";

export const FocusScreem = () => {
    const ref = useRef()
  const handleClick = () => {
    ref.current.select();
  };
  return (
    <div>
      <h1>FocusScreem</h1>
      <hr />

      <input ref={ref} className="form-control m-auto " placeholder="hola" />

      <button
        type="button"
        onClick={handleClick}
        className="mt-2 btn btn-outline-danger"
      >
        Focus
      </button>
    </div>
  );
};
