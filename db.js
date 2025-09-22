import { app } from "./firebase.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const db = getFirestore(app);

export async function saveUserData(user) {
  try {
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date().toISOString()
    });
    console.log("User saved to Firestore");
  } catch (e) {
    console.error("Error saving user:", e);
  }
}
