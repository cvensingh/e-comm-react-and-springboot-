// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDe8zzAmV5HbVntlWrew2RoRuvAok_8M2o",
    authDomain: "kisankart09-2a008.firebaseapp.com",
    projectId: "kisankart09-2a008",
    storageBucket: "kisankart09-2a008.firebasestorage.app",
    messagingSenderId: "589683753418",
    appId: "1:589683753418:web:ff69cb9603c4c4e9f24f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebaseConfig;