// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9HlWThNzufTSHUx2UE5Dgkk6Nt9bN9vc",
  authDomain: "ema-jhon-simple-a16a7.firebaseapp.com",
  projectId: "ema-jhon-simple-a16a7",
  storageBucket: "ema-jhon-simple-a16a7.appspot.com",
  messagingSenderId: "52180953740",
  appId: "1:52180953740:web:917cfb42d063ec3ad729a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app) ;
export default auth ;