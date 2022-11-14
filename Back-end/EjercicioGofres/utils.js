  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import {doc, setDoc, getFirestore} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAGFJvrDc_dSCNeBeIJiMMH1qmGUYJz5uY",
    authDomain: "libros-32373.firebaseapp.com",
    projectId: "libros-32373",
    storageBucket: "libros-32373.appspot.com",
    messagingSenderId: "248524605110",
    appId: "1:248524605110:web:74f510f7faa7cac9e24817"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
  // Add a new document in collection "cities"
await setDoc(doc(db, "libros", "24345"), {
    titulo: "Los Angeles dan calor",
    autor: "Carlos Martín",
    npaginas: 123
  });
  /* await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task); */