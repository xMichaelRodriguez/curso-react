import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  images: [],
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    case types.GetImages:
      return {
        ...state,
        images: [...action.payload],
      };
    case types.DeleteImages:
      return {
        ...state,
        images: state.images.filter((e) => e.id !== state.images.id),
      };
    default:
      return state;
  }
};
