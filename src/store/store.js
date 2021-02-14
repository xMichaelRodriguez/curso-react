import { createStore, combineReducers } from "redux";
import { authReducers } from "../reducers/authReducer";
const reducers = combineReducers({
  auth: authReducers,
});
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
