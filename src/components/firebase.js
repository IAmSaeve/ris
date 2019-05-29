import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA1PIj-7Z0mrJx7fSjppK9E4q2IWF9Km_I",
  authDomain: "rateyourinternship-94023.firebaseapp.com",
  databaseURL: "https://rateyourinternship-94023.firebaseio.com",
  projectId: "rateyourinternship-94023",
  storageBucket: "rateyourinternship-94023.appspot.com",
  messagingSenderId: "718367514324"
};
const db = firebase.initializeApp(config);

export default db.database();
