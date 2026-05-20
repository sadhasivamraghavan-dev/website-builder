// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq9X59tDjw0dj16g2BJatOL_PKcQjhJhY",
  authDomain: "genwebai-b5af4.firebaseapp.com",
  projectId: "genwebai-b5af4",
  storageBucket: "genwebai-b5af4.firebasestorage.app",
  messagingSenderId: "774872876544",
  appId: "1:774872876544:web:25dfffe086eda04f693ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
