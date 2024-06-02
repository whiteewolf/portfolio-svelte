// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJmzTupPDKpq37b0tSTNFYtciQ-iRFVw",
  authDomain: "portfolio-1bfb2.firebaseapp.com",
  projectId: "portfolio-1bfb2",
  storageBucket: "portfolio-1bfb2.appspot.com",
  messagingSenderId: "742032990193",
  appId: "1:742032990193:web:87d9e8595bb5f396612e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth and firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();