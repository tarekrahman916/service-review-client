// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD78a157PSs9h3z6OpQdedu8KGL7iocZZ4",
  authDomain: "review-website-auth.firebaseapp.com",
  projectId: "review-website-auth",
  storageBucket: "review-website-auth.appspot.com",
  messagingSenderId: "1046557624317",
  appId: "1:1046557624317:web:f2da02abacb92f640c3b94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
