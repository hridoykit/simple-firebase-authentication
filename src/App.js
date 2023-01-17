import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
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

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitProvider)
    .then(result => {
      // const credential = GithubAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      const user = result.user;
      console.log(user);
      setUser(user);
    })
    .catch(error => {
      console.error("error: ", error);
    })
  }
  
  return (
    <div className="App">
      {
        user.uid ?
          <button onClick = {handleSignOut}>Sign Out</button>
          :
          <>
          <button onClick = {handleGoogleSignIn}>Sign In with Google</button>
          <button onClick={handleGitHubSignIn}>Sign In with Github</button>
          </>
      }
      
      {/* user info */}
      
      {
        user.uid &&
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
