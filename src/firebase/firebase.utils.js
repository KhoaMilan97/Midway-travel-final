import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyAz36rKFVc5pfCU9q47HcEzvxNeesN5Z_w",
  authDomain: "midway-travel.firebaseapp.com",
  databaseURL: "https://midway-travel.firebaseio.com",
  projectId: "midway-travel",
  storageBucket: "midway-travel.appspot.com",
  messagingSenderId: "924729430845",
  appId: "1:924729430845:web:a6100cc7c9dbaa206deb54",
  measurementId: "G-E90DEG2TT3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// facebookProvider.setCustomParameters({
//   prompt: "select_account",
//   display: "popup"
// });

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
