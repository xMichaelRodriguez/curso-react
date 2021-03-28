import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";
import { calendarReducer } from "./calendarReducer";
import { authreducer } from "./authReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authreducer,
});
