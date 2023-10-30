// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBky_AL4vA7zdUVJ3kpokXXTD6GPq-wuWs",
    authDomain: "human-resource-managemen-be9f4.firebaseapp.com",
    projectId: "human-resource-managemen-be9f4",
    storageBucket: "human-resource-managemen-be9f4.appspot.com",
    messagingSenderId: "92506665051",
    appId: "1:92506665051:web:682d517bece5c420364f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;