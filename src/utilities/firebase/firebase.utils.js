import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhpbfS5fleMYGsuN2zmkXKv4F8VY04-1o",
  authDomain: "shopping-page-5568f.firebaseapp.com",
  projectId: "shopping-page-5568f",
  storageBucket: "shopping-page-5568f.appspot.com",
  messagingSenderId: "1046434743674",
  appId: "1:1046434743674:web:80e3c8176bdcf37f1382c3",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const dataBase = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(dataBase, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
