import React, { useEffect, useState } from "react";
import { GoogleSignUp } from "./firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import App from "../App";

export default function GoogleSignIn() {
  const [userProfile, setUserProfile] = useState({});
  const [isActive, setIsActive] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUserProfile({ displayName, email, photoURL });
        setIsActive(true);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const _signOut = () => {
    signOut(auth)
      .then(function () {
        // Sign-out successful.
        setIsActive(false);
        setUserProfile({});
        console.log("Sign-out successful", isLoggedIn);
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <>
      <h4>{userProfile.displayName}</h4>
      <h4>{userProfile.email}</h4>
      {isActive ? (
        <>
          <button onClick={_signOut}>Sign out</button>
          <App />
        </>
      ) : (
        <button onClick={GoogleSignUp}>Sign in with Google</button>
      )}
    </>
  );
}
