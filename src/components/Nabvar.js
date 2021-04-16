import React from "react";

export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <div className="input-group ">
            <form className="form-inline my-2 my-md-0 w-100 d-flex justify-content-center">
              <input
                className="form-control mr-sm-2 w-75"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary  rounded-circle my-2 my-sm-0" type="button" >
              <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
