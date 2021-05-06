import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { NewPost } from "../components/blog/NewPost";
import { AuthRouter } from "./auth/AuthRouter";
import { Dashboard } from "./dasboard/Dashboard";
import { PrivateRoutes } from "./PrivateRoute";
import { PublicRoutes } from "./PublicRoute";

export const AppRoute = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoutes
            isAuthenticated={true}
            exact
            path="/blog/new-post"
            render={NewPost}
          />
          <PublicRoutes
            isAuthenticated={true}
            path="/auth/"
            render={AuthRouter}
          />
          <PublicRoutes isAuthenticated={true} path="/" render={Dashboard} />

          <Redirect to="/home" />
        </Switch>
      </div>
    </Router>
  );
};
