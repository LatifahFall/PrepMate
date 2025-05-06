import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHSXEFACKPz_7SQoBvL54xIWdqdmQLyAY",
    authDomain: "prepmate-454f8.firebaseapp.com",
    projectId: "prepmate-454f8",
    storageBucket: "prepmate-454f8.firebasestorage.app",
    messagingSenderId: "715295514025",
    appId: "1:715295514025:web:accd62b3cc24f4003778b8",
    measurementId: "G-VWZB0G1RJT"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth();
export const db = getFirestore(app);