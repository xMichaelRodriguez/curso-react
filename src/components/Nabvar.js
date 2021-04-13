import React from "react";

export const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <div class="input-group d-flex justify-content-center">
            <div class="form-outline w-75">
              <input type="search" id="form1" class="form-control text-light" />
              <label class="form-label text-light" for="form1">
                Search
              </label>
            </div>
            <button type="button" class="btn btn-primary">
              <box-icon name="search" type="solid" color="#9999"></box-icon>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
