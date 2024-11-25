import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4p0XFumKzJ0C2isXaqvljFj9ZLoXbxGk",
  authDomain: "highlandbp-9a4d1.firebaseapp.com",
  projectId: "highlandbp-9a4d1",
  storageBucket: "highlandbp-9a4d1.firebasestorage.app",
  messagingSenderId: "845905066187",
  appId: "1:845905066187:web:1a6db31b1e1673dae8034e"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
