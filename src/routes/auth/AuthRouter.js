import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { LoginScreen } from "../../components/auth/LoginScreen";
import { Register } from "../../components/auth/Register";
export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={Register} />

        <Redirect  to="/auth/login" />
      </Switch>
    </div>
  );
};
