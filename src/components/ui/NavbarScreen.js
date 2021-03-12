import React from "react";

export const NavbarScreen = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">PEDRUSCA</span>

      <button className="btn btn-outline-light">
        <em className="fas fa-sign-out-alt"></em> <span>Salir</span>
      </button>
    </div>
  );
};
