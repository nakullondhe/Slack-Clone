import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaqdHY3bRR4k5uQA_u4-UKC3kS9QX7ikc",
  authDomain: "slack-clone-3ffc0.firebaseapp.com",
  projectId: "slack-clone-3ffc0",
  storageBucket: "slack-clone-3ffc0.appspot.com",
  messagingSenderId: "832514717323",
  appId: "1:832514717323:web:570bcd368ee70f6f82868e",
  measurementId: "G-B63VD8HNE3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;