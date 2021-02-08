import React from "react";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { JournalScren } from "../components/journal/JournalScren";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={JournalScren} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
