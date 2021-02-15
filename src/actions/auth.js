import Swal from "sweetalert2";
import { firebaseAuth, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, StartLoading } from "./ui";

export const startLoginEmailAndPassword = (email, password) => {
  return (dispatch) => {

    dispatch(StartLoading());

    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => 
      {

        dispatch(finishLoading());
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };
};

export const startRegisterWithEmailPasswordAndName = (
  email,
  password,
  name
) => {
  return (dispatch) => {

    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {

        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };
};

export const startGoogleLogin = () => {


  return (dispatch) => {

    firebaseAuth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        
        console.log(err);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebaseAuth.signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
