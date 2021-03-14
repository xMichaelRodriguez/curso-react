import moment from "moment";
import { types } from "../types/types";
const initialState = {
  events: [
    {
      title: "Cumplenos",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      notes: "cumpleannos",
      user: {
        _id: new Date().getTime(),
        name: "Michael",
      },
    },
  ],
  activeEvent: null,
};

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    default:
      return state;
  }
};
