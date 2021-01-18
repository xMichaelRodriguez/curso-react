import React, {   useState } from "react";
import { MultipleCustomHooks } from "../03-example/MultipleCustomHooks";

export const RealExampleRef = () => {
  
  const [show, setShow] = useState(false);

  
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button
        className="btn btn-secondary mt-3"
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle hide
      </button>
    </div>
  );
};
