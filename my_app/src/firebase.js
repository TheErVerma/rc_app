import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';


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


const app = initializeApp(firebaseConfig);
const Database = getDatabase(app);
const sh_auth = getAuth();
export default Database;

export { sh_auth };