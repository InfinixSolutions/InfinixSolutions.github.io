// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "XXXXXXXXXX",
  authDomain: "XXXXXXXX",
  projectId: "gymapp-d0162",
  storageBucket: "gymapp-d0162.appspot.com",
  messagingSenderId: "26160131418",
  appId: "XXXXXXXX",
  measurementId: "XXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
