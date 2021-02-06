import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PrivateRoutes = ({
  isAuthenticated,
  render: Component,
  ...rest
}) => {
  localStorage.setItem('lastPath',rest.location.pathname)
  return (
    <Route
      {...rest}
      // render here!
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};
