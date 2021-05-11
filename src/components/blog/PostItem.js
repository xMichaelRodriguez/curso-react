import PropTypes from "prop-types";
import React from "react";
export const PostItem = ({ title, body, id, user, created, modified }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="px-3 text-muted mb-3 p-3" style={{ fontSize: "14px" }}>
          <div className="post-item-left-bar"></div>
          <div className=" d-flex justify-content-between">
            <span className="primary-text">By {user}</span>
            <span>{created}</span>
          </div>
          <span>Modified: {modified}</span>
        </div>

        <div className="card-body ">
          <h4 className="card-title text-break font-weight-bold">{`${title.substr(0, 60)} `}</h4>
          <p className="card-text  text-break">{`${body.substr(
            0,
            120
          )} ...`}</p>
        </div>
        <div className="card-footer bg-secondary">
          <button className="btn secondary ">Read More...</button>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.object,
};
