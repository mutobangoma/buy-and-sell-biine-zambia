// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWiR3pRnHguA_HUSrBWf-GYS787YYMbFc",
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
const analytics = getAnalytics(app);