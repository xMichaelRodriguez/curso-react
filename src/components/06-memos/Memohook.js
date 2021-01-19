import React, { useMemo, useState } from "react";
import { processHeavy } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const heavyProcess = useMemo(() => processHeavy(counter), [counter]);
  return (
    <div>
      <h3>
        <small>{counter}</small>
      </h3>

      <hr />

      <p>{heavyProcess}</p>
      <hr />
      <button className="btn btn-outline-dark" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-danger ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
