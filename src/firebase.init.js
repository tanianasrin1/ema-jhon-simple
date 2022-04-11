// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb04XKpK3TDhFfGY3cAQ40MlpRbZzPLwE",
  authDomain: "ema-john-simple-fa9ee.firebaseapp.com",
  projectId: "ema-john-simple-fa9ee",
  storageBucket: "ema-john-simple-fa9ee.appspot.com",
  messagingSenderId: "404434024034",
  appId: "1:404434024034:web:6c7f714e3a7926a508c33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;