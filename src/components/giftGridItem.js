import React from "react";
import PropTypes from "prop-types"; // ES6
export const GiftGridItem = ({ title, url }) => {
  return (
    <>
      <div className="card-image animate__animated animate__flipInX">
        <img src={url} alt={title} height="150px" width="150px" />
        <span className="card-title">{title}</span>
      </div>
    </>
  );
};

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
