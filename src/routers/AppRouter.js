import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { firebaseAuth } from "../firebase/firebaseConfig";

import { login } from "../actions/auth";
import { JournalScren } from "../components/journal/JournalScren";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { startNotesLoading } from "../actions/notes";
export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      //con ? pregunta si existe la clave del objeto que le doy
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startNotesLoading(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>plis wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            isAuthenticated={isLoggedIn}
            path="/auth/"
            render={AuthRouter}
          />
          <PrivateRoutes
            isAuthenticated={isLoggedIn}
            exact
            path="/"
            render={JournalScren}
          />

          <Redirect to="/auth/" />
        </Switch>
      </div>
    </Router>
  );
};
