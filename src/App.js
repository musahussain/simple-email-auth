import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import UserInfo from './components/UserInfo/UserInfo';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const auth = getAuth();
signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user = result.user;

    console.log(user);
    setUser(user);
  }).catch((error) => {
      console.log("error", error);
  });
  }

  const handleSignOut = () => {
    setUser({});
  }

  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> : 
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      }
      {
        user.uid ? <UserInfo user={user}></UserInfo> : <h1>Welcome To Google Sign In</h1>
      }

    </div>
  );
}

export default App;
