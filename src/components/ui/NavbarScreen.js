import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPaypal, FaUserCircle } from "react-icons/fa";
export const NavbarScreen = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light  ">
      <Link className="navbar-brand" to="/">
        BLOG
      </Link>
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
        <ul className="navbar-nav m-auto">
          <li className="nav-item ">
            <NavLink
              activeClassName="activee"
              className="nav-link"
              style={{ fontSize: "15px" }}
              to="/home"
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="activee"
              className="nav-link"
              style={{ fontSize: "15px" }}
              to="/about"
            >
              <span>About</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="activee"
              className="nav-link text__color"
              style={{ fontzzfontSize: "15px" }}
              to="/blog"
              tabIndex="-1"
              aria-disabled="true"
            >
              <span> Blog</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="activee"
              className={`nav-link `}
              to="/contact"
              tabIndex="-1"
              aria-disabled="true"
            >
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/auth/" className="btn primary btn-lg">
              <FaUserCircle />
              <span> Login</span>
            </Link>
            <Link className="btn secondary btn-lg">
              <FaPaypal /> <span> Donate</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
