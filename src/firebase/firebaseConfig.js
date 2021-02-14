import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNf_HSqP4eX9Qj81KmjyUvZF3hUn-2pj8",
  authDomain: "journal-app-41597.firebaseapp.com",
  projectId: "journal-app-41597",
  storageBucket: "journal-app-41597.appspot.com",
  messagingSenderId: "116650455998",
  appId: "1:116650455998:web:e8764d6ba5e95e00373fef",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fireStoreDB = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth();
export default { fireStoreDB, googleAuthProvider, firebaseAuth };
