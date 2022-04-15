// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxAb5oMZ0zrjOKfMF2NAHP4AHv3fb8Z4o",
  authDomain: "react-todos-app-abf31.firebaseapp.com",
  projectId: "react-todos-app-abf31",
  storageBucket: "react-todos-app-abf31.appspot.com",
  messagingSenderId: "741002195654",
  appId: "1:741002195654:web:bb09b1d469bec35793ddc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)