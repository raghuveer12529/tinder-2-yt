// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgDq_p8PwosDwqA1CDadZy-hez86oYXns",
  authDomain: "tinder-2-yt-7a71b.firebaseapp.com",
  projectId: "tinder-2-yt-7a71b",
  storageBucket: "tinder-2-yt-7a71b.appspot.com",
  messagingSenderId: "935383251440",
  appId: "1:935383251440:web:fe550e3f41c4ad40378535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth,db} ;