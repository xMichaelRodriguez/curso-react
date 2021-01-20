import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvi a llamar");

  return (
    <button className="btn btn-outline-dark m-auto" onClick={() => increment( 5 )}>
      incrementar
    </button>
  );
});
