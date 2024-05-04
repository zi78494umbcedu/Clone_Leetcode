import { initializeApp } from "firebase/app";
 
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