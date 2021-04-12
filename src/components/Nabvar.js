import React from "react";

export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <form className="d-flex w-75">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="button">
              <box-icon
                name="search"
                type="solid"
                animation="tada"
                color="#9999"
              ></box-icon>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
