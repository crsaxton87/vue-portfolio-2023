import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "portfolio-36624.firebaseapp.com",
  projectId: "portfolio-36624",
  storageBucket: "portfolio-36624.appspot.com",
  messagingSenderId: "453651491294",
  appId: "1:453651491294:web:617ab0f09069c335da554f",
  measurementId: "G-RWF6DS9WN7",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
const auth = getAuth();
const timestamp = serverTimestamp;

export { db, auth, timestamp };
