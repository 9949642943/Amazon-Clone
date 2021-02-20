// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQAceFMngsHQJ-29gVDPK2HreCpgCxXjs",
    authDomain: "challenge-eb23f.firebaseapp.com",
    projectId: "challenge-eb23f",
    storageBucket: "challenge-eb23f.appspot.com",
    messagingSenderId: "1067424382512",
    appId: "1:1067424382512:web:f76c609e62acb84862f7f5",
    measurementId: "G-D062H6SMTV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };