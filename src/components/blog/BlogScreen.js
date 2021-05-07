import React from "react";
import { Link } from "react-router-dom";

export const BlogScreen = () => {
  return (
    <div>
      <div className="w-100 cover d-flex  justify-content-center">
        <div style={{ marginTop: "-250px" }} className="ml-auto mr-auto">
          <h1>
            <ins>Blog</ins>
          </h1>
          <nav aria-label="breadcrumb" >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
              style={{ fontSize: "14px" }}
            >
              <div className="post-item-left-bar"></div>
              <span className="primary-text">hola mundo</span>
              <span>2021/05/05</span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ullamco id occaecat id sint.</h5>
              <p className="card-text ">
                Excepteur sit nulla adipisicing anim ex excepteur deserunt ex.
                Cillum id id exercitation pariatur dolore non et magna proident
                laboris ...
              </p>
            </div>
            <div className="card-footer bg-secondary">
              <button className="btn secondary ">Read More...</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
              style={{ fontSize: "14px" }}
            >
              <div className="post-item-left-bar"></div>
              <span className="primary-text">hola mundo</span>
              <span>2021/05/05</span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ullamco id occaecat id sint.</h5>
              <p className="card-text ">
                Excepteur sit nulla adipisicing anim ex excepteur deserunt ex.
                Cillum id id exercitation pariatur dolore non et magna proident
                laboris ...
              </p>
            </div>
            <div className="card-footer bg-secondary">
              <button className="btn secondary ">Read More...</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
              style={{ fontSize: "14px" }}
            >
              <div className="post-item-left-bar"></div>
              <span className="primary-text">hola mundo</span>
              <span>2021/05/05</span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ullamco id occaecat id sint.</h5>
              <p className="card-text ">
                Excepteur sit nulla adipisicing anim ex excepteur deserunt ex.
                Cillum id id exercitation pariatur dolore non et magna proident
                laboris ...
              </p>
            </div>
            <div className="card-footer bg-secondary">
              <button className="btn secondary ">Read More...</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
              style={{ fontSize: "14px" }}
            >
              <div className="post-item-left-bar"></div>
              <span className="primary-text">hola mundo</span>
              <span>2021/05/05</span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ullamco id occaecat id sint.</h5>
              <p className="card-text ">
                Excepteur sit nulla adipisicing anim ex excepteur deserunt ex.
                Cillum id id exercitation pariatur dolore non et magna proident
                laboris ...
              </p>
            </div>
            <div className="card-footer bg-secondary">
              <button className="btn secondary ">Read More...</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card" style={{ width: "18rem" }}>
            <div
              className="px-3 d-flex justify-content-between text-muted mb-3 p-3"
              style={{ fontSize: "14px" }}
            >
              <div className="post-item-left-bar"></div>
              <span className="primary-text">hola mundo</span>
              <span>2021/05/05</span>
            </div>
            <div className="card-body ">
              <h5 className="card-title">Ullamco id occaecat id sint.</h5>
              <p className="card-text ">
                Excepteur sit nulla adipisicing anim ex excepteur deserunt ex.
                Cillum id id exercitation pariatur dolore non et magna proident
                laboris ...
              </p>
            </div>
            <div className="card-footer bg-secondary">
              <button className="btn secondary ">Read More...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
