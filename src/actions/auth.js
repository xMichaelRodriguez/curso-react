import { fetchSync } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSync("auth", { email, password }, "POST");

    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-initDate", new Date().getTime());
      dispatch(login({ uid: body.uid, name: body.name }));
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
