import React from "react";
import { FooterScreen } from "../footer/FooterScreen";
import { NavbarScreen } from "../ui/NavbarScreen";
import background from "../../img/header.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
export const NewPost = () => {
  const location = useLocation();
  return (
    <div className="text-justify">
      <NavbarScreen />
      {!location.pathname.includes("home") && (
        <img src={background} className="img-fluid  offset" alt="" />
      )}
      <div className="cover d-flex w-100 justify-content-center">
        <div style={{ marginTop: "-250px" }} className="ml-auto mr-auto">
          <h1 className="text-center">
            <ins>New Post</ins>
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                New-Post
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <main className="container mb-3 push ">
        <form className="card offset position-relative p-4">
          <div className="form-row d-flex justify-content-center ">
            <div className="col-md-12 ">
              <div className="form-group">
                <label className="font-weight-bold">Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deserunt adipisicing occaecat laboris laboris."
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label className="font-weight-bold">Body</label>
                <textarea
                  className="form-control"
                  rows="17"
                  placeholder="Deserunt adipisicing occaecat laboris laboris."
                ></textarea>
              </div>
            </div>
            <div className="btn primary btn-block w-50">
              Post <FaPlusCircle />
            </div>
          </div>
        </form>
      </main>
      <div className="container-fluid">
        <FooterScreen />
      </div>
    </div>
  );
};
