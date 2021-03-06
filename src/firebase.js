import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOWZVawK1qlrXzsXBu4sAHokJ7xzcKgqM",
    authDomain: "react-contact-form-b0a67.firebaseapp.com",
    projectId: "react-contact-form-b0a67",
    storageBucket: "react-contact-form-b0a67.appspot.com",
    messagingSenderId: "215844780210",
    appId: "1:215844780210:web:efa709433308401154b1ab"
  
}); 

var db = firebaseApp.firestore();

export { db };