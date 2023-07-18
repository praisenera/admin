import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6LDPE0_hfM2F6pnYoXuYooZT5DET56Hw",
  authDomain: "cct-enrollment.firebaseapp.com",
  projectId: "cct-enrollment",
  storageBucket: "cct-enrollment.appspot.com",
  messagingSenderId: "634369447910",
  appId: "1:634369447910:web:1a2a7405bc3eb88f416827",
  measurementId: "G-BQ36RCMTVV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
