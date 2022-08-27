// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

///////////////////////////////////

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZh3cBCqJZGY4ndyrvLp39BKwSzuI2u5Q",
  authDomain: "crwn-clothing-mv.firebaseapp.com",
  projectId: "crwn-clothing-mv",
  storageBucket: "crwn-clothing-mv.appspot.com",
  messagingSenderId: "473312482302",
  appId: "1:473312482302:web:79703d27d8c6594f03e6af",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const FirebaseIntit = () => firebaseConfig && firebaseApp;

//FirebaseIntit();

export default FirebaseIntit;
