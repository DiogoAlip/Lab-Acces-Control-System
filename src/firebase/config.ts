// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMgg8px07pf_tlfaBEnCQS0PdaTj73D3s",
  authDomain: "lacs-5c6ca.firebaseapp.com",
  projectId: "lacs-5c6ca",
  storageBucket: "lacs-5c6ca.firebasestorage.app",
  messagingSenderId: "535273617520",
  appId: "1:535273617520:web:aaaba4282cfa7cb3a35cb5",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
