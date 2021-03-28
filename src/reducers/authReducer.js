import { types } from "../types/types";

const initialState = {
  checking: true,
  //   name: null,
  //   uid: null,
};

export const authreducer = (state = { initialState }, action) => {
  switch (action.type) {
    case types.authLogin:
      
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    default:
      return state;
  }
};
