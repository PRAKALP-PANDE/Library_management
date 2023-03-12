// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBb7fZV0gvmpYdN3ZNNofO0OsLFaZz4Os",
  authDomain: "react-crud-e8cbc.firebaseapp.com",
  projectId: "react-crud-e8cbc",
  storageBucket: "react-crud-e8cbc.appspot.com",
  messagingSenderId: "108315750231",
  appId: "1:108315750231:web:275257503de7e94f131812",
  measurementId: "G-RLLNECH742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);