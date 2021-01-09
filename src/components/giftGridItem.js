import React from "react";

export const GiftGridItem = ({ title, url }) => {
  return (
    <div className="col s12 m8 l6">
      <div className="card m6 z-depth-3 animate__animated animate__flipInX">
        <div className="card-image ">
          <img  src={url} alt={title} height="150px" width="150px" />
          <span className="card-title" >{title}</span>
        </div>
      </div>
    </div>
  );
};
