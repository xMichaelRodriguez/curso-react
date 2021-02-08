import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form >
        <div className="auth__group">
          <input
            type="email"
            className="auth__input"
            placeholder="Email"
            name="email"
            autoComplete="false"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Email</label>
        </div>

        <div className="auth__group">
          <input
            type="Password"
            className="auth__input"
            placeholder="password"
            name="password"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
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
