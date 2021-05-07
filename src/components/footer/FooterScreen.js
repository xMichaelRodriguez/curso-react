import React from "react";
import { NavLink } from "react-router-dom";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
export const FooterScreen = () => {
  return (
    <div className="container footer bg-secondary">
      <div className="row card-footer  bg-secondary">
        <div className="col-md-4 py-3">
          <h3>Michael Blog</h3>
          <p>Voluptate dolore sit est enim ea veniam.</p>

          <p className="font-weight-bold">Socials</p>

          <div className="btn-group " role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn secondary ml-2"
              style={{ borderRadius: "100%" }}
            >
              <GrFacebookOption  size="20px" />
            </button>
            <button
              type="button"
              className="btn secondary ml-2"
              style={{ borderRadius: "100%" }}
            >
              <GrInstagram size="20px" />
            </button>
            <button
              type="button"
              className="btn secondary ml-2"
              style={{ borderRadius: "100%" }}
            >
              <GoMarkGithub size="20px" />
            </button>
          </div>
        </div>
        <div className="col-md-2">
          <ul
            className="list-group text-center"
            style={{ border: "none", fontSize: "12px" }}
          >
            <li
              className="list-group-item"
              style={{ border: "none", fontSize: "12px" }}
            >
              <h5 className="font-weight-bold">Pages</h5>
            </li>
            <li
              className="list-group-item"
              style={{ border: "none", fontSize: "12px" }}
            >
              <NavLink
                activeClassName="activee"
                className="text-dark"
                style={{ textDecoration: "none" }}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li
              className="list-group-item"
              style={{ border: "none", fontSize: "12px" }}
            >
              <NavLink
                activeClassName="activee"
                className="text-dark"
                style={{ textDecoration: "none" }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li
              className="list-group-item"
              style={{ border: "none", fontSize: "12px" }}
            >
              <NavLink
                activeClassName="activee"
                className="text-dark"
                style={{ textDecoration: "none" }}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li
              className="list-group-item "
              style={{ border: "none", fontSize: "12px" }}
            >
              <NavLink
                activeClassName="activee"
                className="text-dark"
                style={{ textDecoration: "none" }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-6 py-3">
          <h3 className=" text-center">
            <ins>New Episode Every Week!</ins>
          </h3>

          <p>
            Cillum velit eiusmod incididunt esse anim commodo non in. Laborum
            consequat qui dolore culpa tempor ut. Reprehenderit do sit aute
            ipsum qui. Voluptate deserunt aliqua duis veniam mollit ad sit enim
            eiusmod.
          </p>
        </div>
        <div className="col-md-12">
          <hr className="bg-dark" />
          <span className="d-flex justify-content-center">
            @2021 Michael all right reserved
          </span>
        </div>
      </div>
    </div>
  );
};
