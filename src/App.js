import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error('error: ', error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({});
    })
    .catch(() => {
      setUser({});
    })
  }
  
  return (
    <div className="App">
      <button onClick = {handleGoogleSignIn}>Sign In with Google</button>
      <button onClick = {handleSignOut}>Sign Out</button>
      
      {/* user info */}
      
      {
        user.email &&
          <div>
            <h3>User Name: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
      }
    </div>
  );
}

export default App;
