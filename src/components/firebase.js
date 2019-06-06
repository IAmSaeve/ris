import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA1PIj-7Z0mrJx7fSjppK9E4q2IWF9Km_I",
  authDomain: "rateyourinternship-94023.firebaseapp.com",
  projectId: "rateyourinternship-94023"
};
const db = firebase.initializeApp(config);

export default db.firestore();
