import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { Nabvar } from "../components/Nabvar";
import { NewFileScreen } from "../components/NewFileScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <Nabvar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/galery" component={HomeScreen} />
          <Route exact path="/newFile" component={NewFileScreen} />
          <Redirect to="/galery" />
        </Switch>
      </div>
    </>
  );
};
