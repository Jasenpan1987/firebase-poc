import firebase from "firebase";

const config = {
  apiKey: "AIzaSyArw1VvE5bZ1NgtAzw-SEklovVhjEGD6lc",
  authDomain: "signin-demo-825ba.firebaseapp.com",
  databaseURL: "https://signin-demo-825ba.firebaseio.com",
  projectId: "signin-demo-825ba",
  storageBucket: "signin-demo-825ba.appspot.com",
  messagingSenderId: "824985504580"
};

const firebaseApp = firebase.initializeApp(config);

const auth = firebase.auth();

const db = firebase.database();

export { firebaseApp, auth, db };
