import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
const config  = {
  apiKey: "AIzaSyDLWZghtYtk8Jkw_RcGNSJ7GD2sx9yc4lc",
  authDomain: "challengeon-5bf4c.firebaseapp.com",
  databaseURL:
    "https://challengeon-5bf4c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "challengeon-5bf4c",
  storageBucket: "challengeon-5bf4c.appspot.com",
  messagingSenderId: "858610677639",
  appId: "1:858610677639:web:f915473ef24230595b4522",
  measurementId: "G-5XYKKRTGH5",
};

// Initialize Firebase
firebase.initializeApp(config );
export default firebase;
