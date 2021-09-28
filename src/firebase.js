import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uwqWQEPgHx0jPwrrk0vmoXul80ekeh0",
  authDomain: "slack-clone-ce39d.firebaseapp.com",
  projectId: "slack-clone-ce39d",
  storageBucket: "slack-clone-ce39d.appspot.com",
  messagingSenderId: "477854331991",
  appId: "1:477854331991:web:5940d594d99d5d99ea5f12",
  measurementId: "G-HHJNE1KC6V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;