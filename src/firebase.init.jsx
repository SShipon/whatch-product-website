import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKyJy8MYL8G0d-Q6wef0IBRXhZRh8W_DQ",
  authDomain: "watch-product-website.firebaseapp.com",
  projectId: "watch-product-website",
  storageBucket: "watch-product-website.appspot.com",
  messagingSenderId: "143103510014",
  appId: "1:143103510014:web:cccd32ab20c203d3316caf",
  measurementId: "G-L0J510HVJS",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
