import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqHWhbS_RdcR0EUMy6fBKz4pwmlw8AX-U",
    authDomain: "product-shopping-mart.firebaseapp.com",
    projectId: "product-shopping-mart",
    storageBucket: "product-shopping-mart.firebasestorage.app",
    messagingSenderId: "198609198740",
    appId: "1:198609198740:web:ae248d1ce917fc3eda5e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
