// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDSBsuO588hOuzyms6n9PXb2UgVhdLas3k",
  authDomain: "sneakers-388a3.firebaseapp.com",
  projectId: "sneakers-388a3",
  storageBucket: "sneakers-388a3.appspot.com",
  messagingSenderId: "421848506385",
  appId: "1:421848506385:web:b7a64d97d600a81cef91b0",
  measurementId: "G-RS8597QZXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider()

const Auth = () => {
  

  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      console.log(user)
  }). catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      const email = error.customData.email      // The email of the user's account used.
      const credential = GoogleAuthProvider.credentialFromError(error);  
      console.log(errorMessage)          // The AuthCredential type that was used.
  }) 
}

export default Auth