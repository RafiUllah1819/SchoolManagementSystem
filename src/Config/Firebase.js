import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWeDgHbn5JTRrByHpYBwPrJuDTR4uU8OM",
  authDomain: "schoolms-6895e.firebaseapp.com",
  projectId: "schoolms-6895e",
  storageBucket: "schoolms-6895e.appspot.com",
  messagingSenderId: "324836315816",
  appId: "1:324836315816:web:a263f1eae5f3fd0345289d",
  measurementId: "G-ZQL0HGXYBN",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
