import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  startGoogleLogin,
  startLoginEmailAndPassword,
} from "../../actions/auth";

import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValue, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailAndPassword(email, password));
  };

  const handleLoginWithGoogle = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="auth__group">
          <input
            type="email"
            className="auth__input"
            placeholder="Email"
            name="email"
            vale={email}
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
            placeholder="password"
            name="password"
            vale={password}
            onChange={handleInputChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
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
