// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMZbGsRhooDzek_uqEH1PxwtE73g4fWss",
  authDomain: "react-app-9f6a0.firebaseapp.com",
  databaseURL: "https://react-app-9f6a0-default-rtdb.firebaseio.com",
  projectId: "react-app-9f6a0",
  storageBucket: "react-app-9f6a0.appspot.com",
  messagingSenderId: "593032340628",
  appId: "1:593032340628:web:0aa1408eb140cc21738081",
  measurementId: "G-MYK1YMGEXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);

export default Database;