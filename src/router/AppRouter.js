import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { Nabvar } from "../components/Nabvar";
import { NewFileScreen } from "../components/NewFileScreen";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Nabvar />
        <div className="container-fluid mt-3">
          <Switch>
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/newFile" component={NewFileScreen} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
