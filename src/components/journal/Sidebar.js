import React from "react";
import { SidebarEntry } from "./SidebarEntry";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="bx bxs-moon"></i>
          <span> Michael</span>
        </h3>
        <button className="btn">Logout</button>
      </div>

      <div className="journal__new-entry">
        <i className="bx bx-calendar-plus bx-md"></i>
        <p className="mt-2">New Entry</p>
      </div>

      <SidebarEntry/>
    </aside>
  );
};
