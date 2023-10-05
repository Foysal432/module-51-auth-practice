// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3grSBHDEGHaU2xPsOFSv9nzmfpCeuqY",
  authDomain: "module-51-auth-practice.firebaseapp.com",
  projectId: "module-51-auth-practice",
  storageBucket: "module-51-auth-practice.appspot.com",
  messagingSenderId: "743004871666",
  appId: "1:743004871666:web:6d8135526123233b74a96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;