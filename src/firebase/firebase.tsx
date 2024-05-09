// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyCTwMc2ShiHt4o933L-q2NeCOeUWioe--Q",
    // authDomain: "sdc-new-calendar-vacation.firebaseapp.com",
    // projectId: "sdc-new-calendar-vacation",
    // storageBucket: "sdc-new-calendar-vacation.appspot.com",
    // messagingSenderId: "129344356801",
    // appId: "1:129344356801:web:d6660765fa0c7b968d2f40",
    // measurementId: "G-YDQN36SFN4",
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId:
        process.env.NEXT_PUBLIC_FIREBASE_PROTECTED_ID,
    storageBucket:
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
        process.env
            .NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId:
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth(app);
