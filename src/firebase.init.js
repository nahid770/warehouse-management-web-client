// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzxhRDn-80-U7cEsKLauqmEVFKVC5ywsQ",
  authDomain: "warehouse-management-web-e36b9.firebaseapp.com",
  projectId: "warehouse-management-web-e36b9",
  storageBucket: "warehouse-management-web-e36b9.appspot.com",
  messagingSenderId: "970347825122",
  appId: "1:970347825122:web:6c451aaf3d27d20da8dbbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;