import Swal from "sweetalert2";
import { fetchAsync, fetchSync } from "../helpers/fetch";
import { types } from "../types/types";
import { eventLogout } from "./events";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Iniciando Sesion...",
      text: "Por favor espere...",
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const resp = await fetchSync("auth", { email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-initDate", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
      Swal.close();
    } else {
      Swal.close();
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Registrando...",
      text: "Por favor espere...",
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    const resp = await fetchSync("auth/new", { name, email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-initDate", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
      Swal.close();
    } else {
      Swal.close();
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchAsync("auth/renew");

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);

      localStorage.setItem("token-initDate", new Date().getTime());

      dispatch(login({ uid: body.uid, name: body.name }));

      Swal.close();
    } else {
      dispatch(checkingFish());
    }
  };
};

const checkingFish = () => ({
  type: types.authFinishChecking,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();

    dispatch(eventLogout());

    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});
