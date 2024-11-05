import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBe2TLDA1QD4Rpd4Sf_ZiEOF6Jww_pKVXk",
  authDomain: "bphuoc-8a14d.firebaseapp.com",
  projectId: "bphuoc-8a14d",
  storageBucket: "bphuoc-8a14d.appspot.com",
  messagingSenderId: "603245584576",
  appId: "1:603245584576:web:601c65d94356a3f1730d25",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
