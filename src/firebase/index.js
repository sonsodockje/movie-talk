// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: import.meta.env.VITE_FE_API_KEY,

  authDomain: "miniitter.firebaseapp.com",

  databaseURL: "https://miniitter-default-rtdb.firebaseio.com",

  projectId: "miniitter",

  storageBucket: "miniitter.appspot.com",

  messagingSenderId: "536393511478",

  appId: "1:536393511478:web:2ea68957d4200c51c19e97"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);



