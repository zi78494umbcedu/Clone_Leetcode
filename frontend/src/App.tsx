
import { useEffect } from 'react';
import './App.css'
import { Signin } from './Signin';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userAtom } from './store/atoms/user';
import { RecoilRoot, useRecoilState } from 'recoil';

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
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
}


function StoreApp(){
  const [user,setUser] = useRecoilState(userAtom);

  useEffect(()=>{
  const auth = getAuth();
   onAuthStateChanged(auth, function(user) {
      if (user && user.email) {
        setUser({
          loading:true,
          user:{
            email:user.email
          }
        })
        console.log('This is the user: ', user)
      } else {
        setUser({
          loading:false
          
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  },[])

if(user.loading){
  return <div> You are logged in as {user.user?.email}</div>
}
if(!user.user){
return <div><Signin /></div>
}
}
export default App
