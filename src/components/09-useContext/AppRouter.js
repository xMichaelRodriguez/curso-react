import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "./NavBar";

import { AboutPage } from "./AboutPage";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

       <div className="container">
       <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="./" />
        </Switch>
       </div>
      </div>
    </Router>
  );
};
