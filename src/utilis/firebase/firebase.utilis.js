// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, "users", userAuth.uid);
//   console.log(userDocRef);

//   const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
//   console.log(userSnapshot.exists());

//   // if USER does not exist
//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, { displayName, email, createdAt });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   // if USER does exist
//   return userDocRef;
// };
export const createUserDocumentFromAuth = async (userAuth) => {
  try {
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // if USER does not exist
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      await setDoc(userDocRef, { displayName, email, createdAt });
    }

    // if USER does exist
    return userDocRef;
  } catch (err) {
    console.log(err);
  }
};
