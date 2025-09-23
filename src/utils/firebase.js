// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkJ45KwC2gHHz1rIaTA3Eqlp47xSZlTs",
  authDomain: "netflix-ai-55a27.firebaseapp.com",
  projectId: "netflix-ai-55a27",
  storageBucket: "netflix-ai-55a27.firebasestorage.app",
  messagingSenderId: "605882142671",
  appId: "1:605882142671:web:615cf766121004db1e4cba",
  measurementId: "G-ZR29TCMF2C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
