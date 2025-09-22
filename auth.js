import { app } from "./firebase.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { saveUserData } from "./db.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("login").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      saveUserData(user);

      // Redirect after login
      window.location.href = "https://eric66528.github.io/E-commerceweb/";
    })
    .catch((error) => {
      console.error("Login failed:", error.message);
    });
});
