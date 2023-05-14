// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LSKQ2rR16GsRAuTk6Qr2D50JT47HF_4",
  authDomain: "medical-doctor-service.firebaseapp.com",
  projectId: "medical-doctor-service",
  storageBucket: "medical-doctor-service.appspot.com",
  messagingSenderId: "764539162022",
  appId: "1:764539162022:web:17c2cebbaeeea72abf5367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;