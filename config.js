import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQRcI1tpjArRUpofFRUqcl51Hmumib9w0",
  authDomain: "todolist-project-9307b.firebaseapp.com",
  projectId: "todolist-project-9307b",
  storageBucket: "todolist-project-9307b.firebasestorage.app",
  messagingSenderId: "942743197652",
  appId: "1:942743197652:web:fddefeda06162d37f3a841",
  measurementId: "G-QQBV0DG2WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{
    app,
    db
}