import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvOoLznISfB6xSwsvA8iCtguAB8x8pnC4",
  authDomain: "discord-clone-b2449.firebaseapp.com",
  projectId: "discord-clone-b2449",
  storageBucket: "discord-clone-b2449.appspot.com",
  messagingSenderId: "370968722730",
  appId: "1:370968722730:web:381b303fdc503368c5f253",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
