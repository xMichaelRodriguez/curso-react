import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { PrivateRoutes } from "./PrivateRoutes";

import { LoginScreen } from "../components/login/LoginScreen";
import { PublicRoutes } from "./PublicRoutes";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

          <PrivateRoutes
            path="/"
            render={DashboardRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
