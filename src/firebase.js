// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhAoK1FBuPxkb8nR9XbHikPrcS7OjhnO0",
  authDomain: "gymapp-d0162.firebaseapp.com",
  projectId: "gymapp-d0162",
  storageBucket: "gymapp-d0162.appspot.com",
  messagingSenderId: "26160131418",
  appId: "1:26160131418:web:25fb9e6d0da85e22fb1763",
  measurementId: "G-RQECKE3VB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
