import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // * Email Account Functionalities
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  // * Phone Account Functionalities
  function setUpRecaptcha() {
    auth.languageCode = "en";

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("recapchaaa cha");
          // onSignInSubmit(phoneNumber);
        },
      }
    );
  }

  function onSignInSubmit(phoneNumber) {
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    return auth
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
        return true;
        // ...
      })
      .catch((error) => {
        console.log(error);

        // Error; SMS not sent
        return false;
        // ...
      });
  }

  function confirm(code) {
    const confirmationResult = window.confirmationResult;
    return confirmationResult.confirm(code);
    // .then((result) => {
    //   // User signed in successfully.
    //   console.log(result);

    //   setCurrentUser(result.user);
    //   return true;
    //   // ...
    // })
    // .catch((error) => {
    //   console.log(error);

    //   // User couldn't sign in (bad verification code?)
    //   return false;
    //   // ...
    // });
  }

  function signOut() {
    return auth.signOut();
  }

  useEffect(() => {}, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // setCurrentUser({ email: "hi" });
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    // Email Auth
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    // Phone Auth
    onSignInSubmit,
    confirm,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
