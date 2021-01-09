import React from "react";

export const GiftGridItem = ({ id, title, url }) => {
  return (
    <div className="col s12 m6 l6">
      <div className="card m6 z-depth-3">
        <div className="card-image ">
          <img src={url} alt={title} height="150px" width="150px" />
          <span className="card-title">{title}</span>
        </div>
      </div>
    </div>
  );
};
