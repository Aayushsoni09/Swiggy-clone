// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuDK-r7zh-HTDVEgedZUc3PTpcWdc-hsQ",
  authDomain: "swiggy-clone-14e6c.firebaseapp.com",
  projectId: "swiggy-clone-14e6c",
  storageBucket: "swiggy-clone-14e6c.appspot.com",
  messagingSenderId: "710330141266",
  appId: "1:710330141266:web:3cf2d11d3f86d1bdef2d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;