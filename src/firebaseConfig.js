import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXr5A6aTtqBRZSg8uqGyp2SAJKKCtgZ4E",
  authDomain: "training-e1aab.firebaseapp.com",
  projectId: "training-e1aab",
  storageBucket: "training-e1aab.appspot.com",
  messagingSenderId: "559339071845",
  appId: "1:559339071845:web:bd55e78008b529cbc4d98c",
  measurementId: "G-LWB60F643B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export default db; // Export Firestore instance
