
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1fXwuph0i87nsdSi7F2ZaYS_zjZPjz6E",
  authDomain: "education-hub-101.firebaseapp.com",
  projectId: "education-hub-101",
  storageBucket: "education-hub-101.appspot.com",
  messagingSenderId: "353534706773",
  appId: "1:353534706773:web:69c9e222837fa746e5c0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;