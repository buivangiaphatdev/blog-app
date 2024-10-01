// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bvgp-blog.firebaseapp.com",
  projectId: "bvgp-blog",
  storageBucket: "bvgp-blog.appspot.com",
  messagingSenderId: "188058361699",
  appId: "1:188058361699:web:b28ed5f9c07699400a7d56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);