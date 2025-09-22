import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDpNCkzdFvCA3z9bYmbyVlOgJW1YjVJW3s",
  authDomain: "e-commerceweb-3186d.firebaseapp.com",
  projectId: "e-commerceweb-3186d",
  storageBucket: "e-commerceweb-3186d.firebasestorage.app",
  messagingSenderId: "194467955865",
  appId: "1:194467955865:web:8a2d90219ca41f0e582408",
  measurementId: "G-YMNGP5V78M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
getAnalytics(app);
