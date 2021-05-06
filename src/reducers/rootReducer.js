import { types } from "../types/types";

const initialState = {
  auth: {
    checking: false,
  },
  post: {
    activePost: null,
    posts: [],
  },
  ui: {
    setError: false,
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginStart:
      return {
        ...state,
        /*  ...action.payload,
        cheking: false, */
      };

    default:
      return state;
  }
};
