import React from "react";
import propTypes from "prop-types";
const App = ({ saludo = "hola soy tu papi" }) => {
  return (
    <>
      <h1>{saludo}</h1>
    </>
  );
};

App.propTypes = {
  saludo: propTypes.string.isRequired
};

export default App;
