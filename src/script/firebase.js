import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FE_API_KEY,
  authDomain: "miniitter.firebaseapp.com",
  databaseURL: "https://miniitter.firebaseio.com",
  projectId: "miniitter",
  storageBucket: "miniitter.appspot.com",
  messagingSenderId: "536393511478",
  appId: "1:536393511478:web:2ea68957d4200c51c19e97",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
