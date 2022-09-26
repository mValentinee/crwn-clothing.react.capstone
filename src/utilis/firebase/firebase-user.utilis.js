// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import FirebaseIntit from "./firebase-init.utilis";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
///////////////////////////////////

//FirebaseIntit();

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
    //console.log(userSnapshot);
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
    console.log(err.code);
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

// Sign Out User
export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;
  onAuthStateChanged(auth, callback);
};
