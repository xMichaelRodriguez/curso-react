import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(20);

  /* const increment = () => {
    setCounter(counter + 1);
  }; */

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );
  return (
    <div>
      <h1>Callback Hooks:{counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
