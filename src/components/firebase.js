import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {};
const db = firebase.initializeApp(config);

export default db.firestore();
