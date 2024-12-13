// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmUQ3pnAe2SmqksDvC9dtee7r3h0lNjc",
  authDomain: "job-portal-c6c0d.firebaseapp.com",
  projectId: "job-portal-c6c0d",
  storageBucket: "job-portal-c6c0d.firebasestorage.app",
  messagingSenderId: "1021723882910",
  appId: "1:1021723882910:web:c3072454fbd2e1959a128f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);