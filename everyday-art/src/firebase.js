import firebase from "firebase";

/* The API Key is saved in the .env file, and I use the dotenv package in order to use "process.env". */
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_SECRET,
    authDomain: "everyday-art.firebaseapp.com",
    databaseURL: "https://everyday-art.firebaseio.com",
    projectId: "everyday-art",
    storageBucket: "",
    messagingSenderId: "169350248768",
    appId: "1:169350248768:web:365e3d0b4dc105f824a2a5"
  };

  firebase.initializeApp(config);
  export default firebase;