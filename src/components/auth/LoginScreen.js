import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export const LoginScreen = () => {
  const handleLogin = (e) => e.preventDefault();
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
                className="form-control"
                type="email"
                placeholder="example@dominio.com"
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="col-md-6 mb-3">
            <button className="btn primary btn-lg" type="submit">
              <FaSignInAlt /> &nbsp;
              <span>Login</span>
            </button>
          </div>
          <div className="col-md-6 w-100">
            <Link to="/auth/register" class="btn btn-link text-capitalize">
              forgot password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
