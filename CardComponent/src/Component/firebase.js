import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDbE_yot0BNJev4dbl4vCkacCuag6gnVwA",
  authDomain: "signup-f49a8.firebaseapp.com",
  projectId: "signup-f49a8",
  storageBucket: "signup-f49a8.appspot.com",
  messagingSenderId: "612833904160",
  appId: "1:612833904160:web:f829c81ea4651eff8e9e45",
  measurementId: "G-5RTMEEBZKY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const GoogleSignUp = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const image = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("image", image);
    })
    .catch((error) => {
      console.log(error);
    });
};
