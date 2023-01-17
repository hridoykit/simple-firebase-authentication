// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyWgvI4W8TCwCfVN05FThS4q_Z-nVT6U8",
  authDomain: "my-first-firebase-30271.firebaseapp.com",
  projectId: "my-first-firebase-30271",
  storageBucket: "my-first-firebase-30271.appspot.com",
  messagingSenderId: "209822487256",
  appId: "1:209822487256:web:330299a48b3490bd373dad",
  measurementId: "G-ZJNF71GF9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;