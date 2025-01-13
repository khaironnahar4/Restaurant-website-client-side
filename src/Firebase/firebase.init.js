// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkyRrcvJ6TKbDeFlYE_6y9r-_5rZJri5o",
  authDomain: "food-vila-9f177.firebaseapp.com",
  projectId: "food-vila-9f177",
  storageBucket: "food-vila-9f177.firebasestorage.app",
  messagingSenderId: "158455802573",
  appId: "1:158455802573:web:f3c058534bc3e67c2e1784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;