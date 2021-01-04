import React from "react";
import PropTypes from "prop-types";
const App = ({ saludo,subtitulo="soy un subtitulo " }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

//obliga a enviar el tipo de dato de la prop
App.propTypes = {
  saludo: propTypes.string.isRequired
};

export default App;
