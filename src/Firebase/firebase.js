import firebase from "firebase/app";
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCME4cmaAZOPX2BJYCXGjO-UJ8ZYQFe5mA",
  authDomain: "ygo-project.firebaseapp.com",
  projectId: "ygo-project",
  storageBucket: "ygo-project.appspot.com",
  messagingSenderId: "132032526161",
  appId: "1:132032526161:web:ae2847ce0b012e5b61c570"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;