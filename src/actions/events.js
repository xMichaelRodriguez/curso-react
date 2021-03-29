import Swal from "sweetalert2";
import { fetchAsync, fetchSync } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const startEventAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;
    try {
      Swal.fire({
        title: "Guardando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const resp = await fetchAsync("events", event, "POST");
      const body = await resp.json();
      console.log(body);
      if (body.ok) {
        event.id = body.evento.id;
        event.user = {
          _id: uid,
          name,
        };

        dispatch(eventAddNew(event));
        Swal.close();
        Swal.fire("Guardado", `${body.evento.title}, guardado`, "success");
      }
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };
};

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

export const eventStartUpdated = (event) => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "Actualizando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
      const resp = await fetchAsync(`events/${event.id}`, event, "PUT");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventUpdated(event));
        Swal.close();
        Swal.fire("Evento Actualizado", body.evento.title, "success");
      } else {
        Swal.close();
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  };
};

const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});

export const startEventDeleted = () => {
  return async (dispatch, getState) => {
    const { id } = getState().calendar.activeEvent;
    try {
      Swal.fire({
        title: "Actualizando...",
        text: "Por favor espere...",
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });

      const resp = await fetchAsync(`events/${id}`, {}, "DELETE");
      const body = await resp.json();

      if (body.ok) {
        dispatch(eventDeleted());
        Swal.close();
        Swal.fire("Evento Eliminado", "", "success");
      } else {
        Swal.close();
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.close();
      console.log(error);
    }
  };
};

const eventDeleted = () => ({ type: types.eventDeleted });

export const eventStartLoading = () => {
  return async (dipatch) => {
    try {
      const resp = await fetchAsync("events");
      const body = await resp.json();

      const events = prepareEvents(body.eventos);
      dipatch(eventLoaded(events));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});

export const eventLogout = () => ({ type: types.eventLogout });
