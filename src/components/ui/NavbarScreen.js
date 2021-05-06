import React from "react";
import { NavLink } from "react-router-dom";
import { FaPaypal, FaUserCircle } from "react-icons/fa";
export const NavbarScreen = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light  ">
      <NavLink className="navbar-brand" to="/">
        BLOG
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarhome"
        aria-controls="navbarhome"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarhome">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link "
              to="/blog"
              tabIndex="-1"
              aria-disabled="true"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link "
              to="/contact"
              tabIndex="-1"
              aria-disabled="true"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn primary btn-lg">
              <FaUserCircle />
              <span> Login</span>
            </button>
            <button className="btn secondary btn-lg">
              <FaPaypal /> <span> Donate</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
