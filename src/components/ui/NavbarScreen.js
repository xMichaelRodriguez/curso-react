import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPaypal, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
export const NavbarScreen = () => {
  const { name } = useSelector((state) => state.auth);

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
              <span className="font-weight-bold">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="activee"
              className="nav-link"
              style={{ fontSize: "15px" }}
              to="/about"
            >
              <span className="font-weight-bold">About</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              activeClassName="activee"
              className="nav-link"
              style={{ fontzzfontSize: "15px" }}
              to="/blog"
              tabIndex="-1"
              aria-disabled="true"
            >
              <span className="font-weight-bold"> Blog</span>
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
              <span className="font-weight-bold">Contact</span>
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {name ? (
            <li className="nav-item dropdown">
              <span
                className="btn btn-link dropdown-toggle"
                style={{ color: "#ff3500" }}
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaUserCircle />
                <span>{` ${name.firstName} ${name.lastName}`}</span>
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <span className="dropdown-item text__color">New Post</span>
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/auth/" className=" btn primary btn-lg">
                <FaUserCircle />
                <span> Login</span>
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link className=" btn secondary btn-lg" to="">
              <FaPaypal /> <span> Donate</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
