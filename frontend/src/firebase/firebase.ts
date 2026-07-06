// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBbSaqI8EgAkqi7uvdpi-M1S2q27Tbd7c",
  authDomain: "ecommerce-88de2.firebaseapp.com",
  projectId: "ecommerce-88de2",
  storageBucket: "ecommerce-88de2.firebasestorage.app",
  messagingSenderId: "42271388303",
  appId: "1:42271388303:web:e5e2c1e91133267bedf6fa",
  measurementId: "G-G920ZC738M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);