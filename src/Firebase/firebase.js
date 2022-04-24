import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDxPY-gXh_w9S2QekCLbZAZZYm7y2zRIxU",
  authDomain: "sign-in-104f5.firebaseapp.com",
  projectId: "sign-in-104f5",
  storageBucket: "sign-in-104f5.appspot.com",
  messagingSenderId: "933097439437",
  appId: "1:933097439437:web:8d15d780c499d6d9c02984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((re) =>{console.log(re)})
  .catch((er) =>{console.log(er)})
};