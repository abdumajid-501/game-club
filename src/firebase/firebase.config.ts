// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuCIA09Ggg-FmGU_OiW6RzB3Ygyc80Z1A",
  authDomain: "game-club-76e8d.firebaseapp.com",
  projectId: "game-club-76e8d",
  storageBucket: "game-club-76e8d.firebasestorage.app",
  messagingSenderId: "902096347794",
  appId: "1:902096347794:web:b2caaf084e3c48c27b7c4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)