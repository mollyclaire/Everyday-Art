import firebase from "firebase";

const config = {
    apiKey: "AIzaSyASER5gv_eddiW5WS8596cxTge6i2KdDac",
    authDomain: "everyday-art.firebaseapp.com",
    databaseURL: "https://everyday-art.firebaseio.com",
    projectId: "everyday-art",
    storageBucket: "",
    messagingSenderId: "169350248768",
    appId: "1:169350248768:web:365e3d0b4dc105f824a2a5"
  };

  firebase.initializeApp(config);
  export default firebase;