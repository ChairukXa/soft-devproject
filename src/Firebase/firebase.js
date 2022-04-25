import firebase from "firebase/app";
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDxPY-gXh_w9S2QekCLbZAZZYm7y2zRIxU",
  authDomain: "sign-in-104f5.firebaseapp.com",
  projectId: "sign-in-104f5",
  storageBucket: "sign-in-104f5.appspot.com",
  messagingSenderId: "933097439437",
  appId: "1:933097439437:web:8d15d780c499d6d9c02984"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;