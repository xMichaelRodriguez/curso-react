import React from "react";
import { useDispatch } from "react-redux";
import { eventDeleted } from "../../actions/eventsCalendar";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();
  const handleDeleted = () => {
    dispatch(eventDeleted());
  };
  return (
    <button className="btn btn-danger fab-denger" onClick={handleDeleted}>
      <i className="fas fa-trash"></i>
      <span> Eliminar Evento</span>
    </button>
  );
};
