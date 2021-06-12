// import moment from "moment";
import { fetchAsync, fetchSync } from '../helpers/fetching';
import { types } from '../types/types';
import { postStartLoading } from './postEvents';
import { setError } from './uiActions';
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSync('auth/login', { email, password }, 'POST');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('x-token', body.token.auth);
      localStorage.setItem('token-initDate', new Date().getTime());
      dispatch(
        login({
          uid: body.user.id,
          name: body.user.userName,
        })
      );
    } else {
      dispatch(setError(body.msg));
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    dispatch(postStartLoading());
    // const timeSession = JSON.parse(localStorage.getItem("token-initDate"));
    // const sessionFormat = moment(timeSession).format("HH");
    // const limitSession = moment("22", "HH").format("HH");
    // console.log(sessionFormat < limitSession);

    const resp = await fetchAsync('auth/renew');
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem('x-token', body.auth);
      localStorage.setItem('token-initDate', new Date().getTime());

      const user = {
        uid: body.userId,
        name: body.name,
      };
      dispatch(login(user));
    } else {
      dispatch(checkingFish());
      return 'volver';
    }
    // if (limitSession > sessionFormat) {
    //   dispatch(checkingFish());
    //   //prosimamente opcion recuerdame
    // } else {
    //   const resp = await fetchAsync("auth/renew");

    //   const body = await resp.json();
    //   if (body.ok) {
    //     localStorage.setItem("token", body.auth);
    //     localStorage.setItem("token-initDate", new Date().getTime());

    //     dispatch(
    //       login({
    //         uid: body.user.userId,
    //         name: {
    //           firstName: body.name.firsName,
    //           lastName: body.name.lastName,
    //         },
    //       })
    //     );
    //   } else {
    //     dispatch(checkingFish());
    //   }
    // }
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

    dispatch(logout());
  };
};

const logout = () => ({
  type: types.authLogout,
});
