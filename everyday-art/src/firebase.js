import firebase from "firebase";

const config = {
    apiKey: "",
    authDomain: "everyday-art.firebaseapp.com",
    databaseURL: "https://everyday-art.firebaseio.com",
    projectId: "everyday-art",
    storageBucket: "",
    messagingSenderId: "169350248768",
    appId: ""
  };

  firebase.initializeApp(config);
  export default firebase;