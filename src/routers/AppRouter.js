import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { login } from "../actions/auth";

import { JournalScren } from "../components/journal/JournalScren";
import { firebaseAuth } from "../firebase/firebaseConfig";
import { AuthRouter } from "./AuthRouter";
export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      //con ? pregunta si existe la clave que le doy
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

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
