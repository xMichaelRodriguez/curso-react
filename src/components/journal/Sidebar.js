import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, startLogout } from "../../actions/auth";
import { SidebarEntry } from "./SidebarEntry";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="bx bxs-moon"></i>
          <span> {displayName}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="bx bx-calendar-plus bx-md"></i>
        <p className="mt-2">New Entry</p>
      </div>

      <SidebarEntry />
    </aside>
  );
};
