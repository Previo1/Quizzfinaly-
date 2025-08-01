import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwaAAfND1dBnr_un2qA3YAy0Ipcpsl7JM",
  authDomain: "newquiz-4454f.firebaseapp.com",
  projectId: "newquiz-4454f",
  storageBucket: "newquiz-4454f.firebasestorage.app",
  messagingSenderId: "268848107378",
  appId: "1:268848107378:web:111595fbc275823ec5d7eb",
  measurementId: "G-RYH64757WM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
