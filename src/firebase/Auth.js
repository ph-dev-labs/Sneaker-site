import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const Auth = () => {
    const provider = new GoogleAuthProvider()

    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
    }). catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email      // The email of the user's account used.
        const credential = GoogleAuthProvider.credentialFromError(error);            // The AuthCredential type that was used.
    }) 
}

export default Auth