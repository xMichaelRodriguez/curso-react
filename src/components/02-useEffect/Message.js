import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setcoords(coords);
      /* console.group("COORS");
      console.log(coors);
      console.groupEnd(); */
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Hola pitudo</h3>
      <hr/>
      <p>x:{x},y:{y}</p>
    </>
  );
};
