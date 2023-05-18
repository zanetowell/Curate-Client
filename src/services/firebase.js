// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPRuyyLgkvjASxHDaBldyNDFMTbTtL3aU",
  authDomain: "curate-769ad.firebaseapp.com",
  projectId: "curate-769ad",
  storageBucket: "curate-769ad.appspot.com",
  messagingSenderId: "419522436797",
  appId: "1:419522436797:web:948e20c494ad84b07aa1d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Name Auth Provider
const provider = new GoogleAuthProvider();

const login = () => {
    return auth.signInWithPopup(provider)
}

const logout = () => {
    return auth.signOut()
}

export { login, logout, auth}