import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form>
        <div className="auth__group">
          <input
            type="text"
            className="auth__input"
            name="firstName"
            placeholder="Your  First Name"
            autoComplete="false"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>First Name</label>
        </div>
        <div className="auth__group">
          <input
            type="text"
            className="auth__input"
            name="lastName"
            placeholder="Your Last Name"
            autoComplete="false"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Last Name</label>
        </div>
        <div className="auth__group">
          <input
            type="email"
            className="auth__input"
            name="email"
            placeholder="Your Email"
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
            name="password"
            placeholder="Your Password"
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Sign In
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
