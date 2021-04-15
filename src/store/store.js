
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";


import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
uiReducer,
  composeEnhancers(applyMiddleware(thunk))
);
