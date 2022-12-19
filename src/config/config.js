import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASe791w4VIB05SF2RennWJJ49KF0d1oYw",
  authDomain: "clone-8ebbc.firebaseapp.com",
  projectId: "clone-8ebbc",
  storageBucket: "clone-8ebbc.appspot.com",
  messagingSenderId: "316391320565",
  appId: "1:316391320565:web:9cc58dc673e80e26b38ebc",
};

const fireabaseApp = firebase.initializeApp(firebaseConfig);
const db = fireabaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
