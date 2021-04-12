import React from "react";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <div className="row ">
      <div className="col-md-12">
        <Link to="/newFile" className="link-primary">
          Primary link
        </Link>
      </div>
      <div className="col-md-6 text-light"></div>
    </div>
  );
};
