// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1bQzr6D2n8MHh6zXgPZU0-a2unkIcJh8",
  authDomain: "onlineshoestore-sd.firebaseapp.com",
  projectId: "onlineshoestore-sd",
  storageBucket: "onlineshoestore-sd.appspot.com",
  messagingSenderId: "516061090244",
  appId: "1:516061090244:web:59fcddeb0242478f23d491",
  measurementId: "G-97Z2YDYRN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);