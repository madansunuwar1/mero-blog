// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-5262d.firebaseapp.com",
  projectId: "blog-5262d",
  storageBucket: "blog-5262d.appspot.com",
  messagingSenderId: "558922321173",
  appId: "1:558922321173:web:1565a93005097ad9dcad1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
