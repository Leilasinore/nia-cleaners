import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCz94qrmG5JzorMnZ4_Tm00oHJ4xzRU7Gk",
  authDomain: "nia-cleaners-3a75a.firebaseapp.com",
  projectId: "nia-cleaners-3a75a",
  storageBucket: "nia-cleaners-3a75a.appspot.com",
  messagingSenderId: "454139190992",
  appId: "1:454139190992:web:d93d10ec55965239ba48d5",
  measurementId: "G-Y2360TV1KZ",
};
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
