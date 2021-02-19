import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";

import {
  startGoogleLogin,
  startLoginEmailAndPassword,
} from "../../actions/auth";

import { removeError, setError } from "../../actions/ui";

import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);
  const [formValue, handleInputChange] = useForm({
    email: "scott@gmail.com",
    password: "123456",
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailAndPassword(email, password));
    }
  };

  const handleLoginWithGoogle = () => {
    dispatch(startGoogleLogin());
  };

  /**
   * Valida las entradas
   */
  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }

    if (password.length < 5) {
      dispatch(
        setError(
          "password should be at least 6  characters and match each other"
        )
      );

      return false;
    }
    dispatch(removeError());
    return true;
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form
        onSubmit={handleLogin}
        className="animate__animated  animate__fadeInUp animate__faster"
      >
        {msgError && <div className="auth__alert-error ">{msgError}</div>}
        <div className="auth__group">
          <input
            type="email"
            className="auth__input"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="false"
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Email</label>
        </div>

        <div className="auth__group">
          <input
            type="Password"
            className="auth__input"
            placeholder="Your Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleLoginWithGoogle}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create New Account
        </Link>
      </form>
    </>
  );
};
