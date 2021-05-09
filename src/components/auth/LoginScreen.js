import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

import { useForm } from "../../Hooks/useForm";
import validator from "validator";
import { removeError, setError } from "../../actions/uiActions";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/authActions";
export const LoginScreen = () => {
  const history = useHistory();
 
  const { msgError } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [formValue, handleInputChange] = useForm({
    email: "scottlovos503@gmail.com",
    password: "Password1",
  });

  const { email, password } = formValue;
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      await dispatch(startLogin(email, password));

      history.push("/");
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }

    if (!validator.isLength(password, { min: 6 })) {
      dispatch(setError("Password should be at least 6"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="shadow auth">
      <form onSubmit={handleLogin}>
        <h1 className="mb-4">
          <ins>Blog</ins>
        </h1>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <div className="form-group">
              <label>Email</label>
              <input
                className={`form-control ${
                  !!msgError && msgError.includes("Email ") && "is-invalid"
                }`}
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="example@dominio.com"
              />
              <div className="invalid-feedback">{msgError}</div>
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label>Password</label>
            <input
              className={`form-control ${
                !!msgError && msgError.includes("Password") && "is-invalid"
              }`}
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <div className="invalid-feedback">{msgError}</div>
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn primary btn-lg" type="submit">
              <FaSignInAlt /> &nbsp;
              <span>Login</span>
            </button>
          </div>
          <div className="col-md-6 w-100">
            <Link to="/auth/register" className="btn btn-link text-capitalize">
              forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
