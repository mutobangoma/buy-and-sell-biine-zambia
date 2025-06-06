// src/firebase.js

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkWJeGT5CipiFigswxYl6-NRXM5yD-R6E",
  authDomain: "biine-4b5a9.firebaseapp.com",
  databaseURL: "https://biine-4b5a9-default-rtdb.firebaseio.com",
  projectId: "biine-4b5a9",
  storageBucket: "biine-4b5a9.appspot.com",
  messagingSenderId: "703004024125",
  appId: "1:703004024125:web:0a0df8313547c17bdf3954",
  measurementId: "G-1Q74DS50K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const database = getDatabase(app);

// Optional: Initialize Analytics (only if supported)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});
