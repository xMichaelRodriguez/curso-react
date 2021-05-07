import React from "react";
import { Link } from "react-router-dom";
export const ContactScreen = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className=" d-flex w-100 justify-content-center">
        <div style={{ marginTop: "-250px" }} className="ml-auto mr-auto">
          <h1>
            <ins>Contact</ins>
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className=" offset shadow bg-light position-relative">
        <div className="container">
          <form className="py-3" onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center mb-3">Get in touch</legend>
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Firts Name</label>
                    <input
                      className="form-control"
                      placeholder="You First Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      placeholder="You Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" placeholder="You Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Start Writing From Here</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Excepteur ut cillum exercitation excepteur veniam."
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn primary btn-lg  text-capitalize"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};
