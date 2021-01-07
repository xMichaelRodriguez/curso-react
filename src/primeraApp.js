import React from "react";
import PropTypes from "prop-types";
const App = ({ saludo,subtitulo }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

//obliga a enviar el tipo de dato de la prop
App.Prototypes={
  saludo:PropTypes.string
}
App.defaultProps = {
  subtitulo:"soy subtitulo papi"
};

export default App;
