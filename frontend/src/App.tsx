
import { useEffect } from 'react';
import './App.css'
import { Signin } from './Signin';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJjCM9HwXyUqomzBCdt7Vco15bE5Fm3vU",
  authDomain: "leetcode-clone-438cd.firebaseapp.com",
  projectId: "leetcode-clone-438cd",
  storageBucket: "leetcode-clone-438cd.appspot.com",
  messagingSenderId: "386810146912",
  appId: "1:386810146912:web:83c78823c6612b5657d305",
  measurementId: "G-H8LT3GR6HH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


function App() {
  useEffect(()=>{
  const auth = getAuth();
   onAuthStateChanged(auth, function(user) {
      if (user) {
        console.log('This is the user: ', user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  },[])

  return (
    <>
      <div>
        <Signin />
      </div>

    </>
  )
}

export default App
