// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Get Auth
export const auth = getAuth();

// Build DataBase
export const db = getFirestore();

// Creating User Document
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  try {
    if (!userAuth) return;

    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // if USER does already exist.
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    }

    // Return User Data To Be Handled
    return userDocRef;
  } catch (err) {
    console.log(err);
  }
};

// Auth With Email & Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
// Sign In With Email & Password
export const signInWithExistingEmail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign In / Auth With Google
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Sign In / Auth With Redirect
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};
