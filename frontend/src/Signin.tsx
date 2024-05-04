/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { app } from "./App";
import { FirebaseError } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const actionCodeSettings = {
    url: 'http://localhost:3000',
    handleCodeInApp: true
};

export const Signin = () => {
    const auth = getAuth(app);
    auth.languageCode = 'it';
    const [email, setEmail] = useState("");

    const onSignin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) {
                return;
            }
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData?.email; // Note: use optional chaining
            const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle errors accordingly
        }
    };

    return (
        <div>
            <button onClick={onSignin}>
                Sign in with Google
            </button>
        </div>
    );
};
