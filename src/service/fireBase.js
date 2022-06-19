// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref, onValue } from "firebase/database";
import Cardmaker, { readData } from "../components/cardmaker/cardmaker";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // The value of `databaseURL` depends on the location of the database
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKED,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
export const database = getDatabase(app);

const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();

const auth = getAuth();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token);
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signInWithGithub = () => {
  signInWithPopup(auth, provider2)
    .then((result) => {
      console.log("asds");
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log(token);
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(`error`);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credential);
      // ...
    });
};
// db 데이터 생성
export const dbSet = (
  userId,
  index,
  name,
  email,
  company,
  color,
  title,
  message,
) => {
  const db = getDatabase();
  set(ref(db, `users/${userId}/}` + index), {
    username: name,
    company,
    email,
    color,
    title,
    message,
    // profile_picture: imageUrl,
  });
};
// db 데이터 읽기
export const dbRead = (userId, callback) => {
  const db = getDatabase();
  const starCountRef = ref(db, "users/" + userId);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    callback(data);
    // updateStarCount(postElement, data);
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log("error()");
      console.log(error);
      // An error happened.
    });
};

export const authService = getAuth();
