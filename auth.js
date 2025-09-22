import { app } from "./firebase.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { saveUserData } from "./db.js";

const auth = getAuth(app);

// Google
const googleProvider = new GoogleAuthProvider();
document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUserData(user);
      window.location.href = "https://eric66528.github.io/E-commerceweb/";
    })
    .catch(err => console.error("Google login failed:", err));
});

// Facebook
const facebookProvider = new FacebookAuthProvider();
document.getElementById("facebookLogin").addEventListener("click", () => {
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
      saveUserData(user);
      window.location.href = "https://eric66528.github.io/E-commerceweb/";
    })
    .catch(err => console.error("Facebook login failed:", err));
});

// Email & Password (Login)
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveUserData(user);
      window.location.href = "https://eric66528.github.io/E-commerceweb/";
    })
    .catch(err => console.error("Email login failed:", err));
});

// Email & Password (Signup)
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      saveUserData(user);
      alert("Signup successful! You can now log in.");
    })
    .catch(err => console.error("Signup failed:", err));
});
