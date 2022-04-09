import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW_I6Ilsg1M_Ihj-ZMKKNbTYMZVo3G10o",
  authDomain: "simple-email-auth-28c78.firebaseapp.com",
  projectId: "simple-email-auth-28c78",
  storageBucket: "simple-email-auth-28c78.appspot.com",
  messagingSenderId: "620876141880",
  appId: "1:620876141880:web:4c36881cd327054f5b1dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;