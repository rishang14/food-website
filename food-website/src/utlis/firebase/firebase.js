import {initializeApp} from "firebase/app" 
 import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
 } from "firebase/auth";
 

const firebaseConfig = {
    apiKey: "AIzaSyAEBCaOcYH90wlSBn63YZ6lshDm8pzQwpc",
    authDomain: "food-website-4e340.firebaseapp.com",
    projectId: "food-website-4e340",
    storageBucket: "food-website-4e340.appspot.com",
    messagingSenderId: "647899876474",
    appId: "1:647899876474:web:8cdfcf126a1075165abfc3",
    measurementId: "G-FHH17B1GZY"
  }; 

  const firebaseApp=initializeApp(firebaseConfig); 
   
  const provider= new GoogleAuthProvider() 
  provider.setCustomParameters({
    prompt:"select_account"
  })
 
   
  export const auth=getAuth(); 
  export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);