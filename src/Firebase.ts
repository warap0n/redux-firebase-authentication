import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsU-qyAxOZDUftDm2e90EEVw-U3cyM2qE",
  authDomain: "auth-redux-7f767.firebaseapp.com",
  projectId: "auth-redux-7f767",
  storageBucket: "auth-redux-7f767.appspot.com",
  messagingSenderId: "408377953530",
  appId: "1:408377953530:web:1706940a626baabff6cd43",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { app, provider, auth };
