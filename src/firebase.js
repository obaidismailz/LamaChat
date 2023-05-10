import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs7jgjK7RqpOjuSnPARZozb3fLowwvRBA",
  authDomain: "auchat-129d2.firebaseapp.com",
  projectId: "auchat-129d2",
  storageBucket: "auchat-129d2.appspot.com",
  messagingSenderId: "915489916429",
  appId: "1:915489916429:web:8d09d3584da5bdbaf0f744",
  measurementId: "G-WR0R2EC2E1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
