import React, { useRef } from "react";
import { FooterScreen } from "../footer/FooterScreen";
import { NavbarScreen } from "../ui/NavbarScreen";
import background from "../../img/header.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/uiActions";
import { useDispatch, useSelector } from "react-redux";
import { startpostsAddNew } from "../../actions/postEvents";
export const NewPost = () => {
  const titleRef = useRef(null);
  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  const location = useLocation();
  const [formValue, handleInputChange, reset] = useForm({
    title: "",
    body: "",
  });
  const { title, body } = formValue;

  const handleNewPost = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startpostsAddNew(formValue));
      reset();
      titleRef.current?.focus();
    }
  };
  const isFormValid = () => {
    if (validator.isEmpty(title.trim())) {
      dispatch(setError("Title Is Required"));
      return false;
    }

    if (!validator.isLength(body, { max: 1000, min: 100 })) {
      dispatch(
        setError("Body Needs Max: 1k characters And Min: 100 characters")
      );
      return false;
    }

    dispatch(removeError());

    return true;
  };
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
        <form
          className="card offset position-relative p-4"
          onSubmit={handleNewPost}
        >
          <div className="form-row d-flex justify-content-center ">
            <div className="col-md-12 ">
              <div
                className={`form-group ${
                  !!msgError && msgError.includes("Title") && "has-danger"
                }`}
              >
                <label className="font-weight-bold" form="title">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  ref={titleRef}
                  className={`form-control ${
                    !!msgError && msgError.includes("Title") && "is-invalid"
                  }`}
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  placeholder="Deserunt adipisicing occaecat laboris laboris."
                />
                <div className="invalid-feedback">{msgError}</div>
              </div>
            </div>
            <div className="col-md-12">
              <div
                className={`form-group ${
                  !!msgError && msgError.includes("Body") && "has-danger"
                }`}
              >
                <label className="font-weight-bold">Body</label>
                <textarea
                  className="form-control"
                  rows="17"
                  name="body"
                  value={body}
                  className={`form-control ${
                    !!msgError && msgError.includes("Body") && "is-invalid"
                  }`}
                  onChange={handleInputChange}
                  placeholder="Deserunt adipisicing occaecat laboris laboris."
                ></textarea>
                <div className="invalid-feedback">{msgError}</div>
              </div>
            </div>
            <button className="btn primary btn-block w-50">Publish</button>
          </div>
        </form>
      </main>
      <div className="container-fluid">
        <FooterScreen />
      </div>
    </div>
  );
};
