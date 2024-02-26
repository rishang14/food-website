import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithEmailAndPassword
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEBCaOcYH90wlSBn63YZ6lshDm8pzQwpc",
  authDomain: "food-website-4e340.firebaseapp.com",
  projectId: "food-website-4e340",
  storageBucket: "food-website-4e340.appspot.com",
  messagingSenderId: "647899876474",
  appId: "1:647899876474:web:8cdfcf126a1075165abfc3",
  measurementId: "G-FHH17B1GZY",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// added db to the app
export const db = getFirestore();
export const createUserWithAuth = async (userAuth,additionalInformation={}) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  console.log(userDocRef);
  // checking that this data is available or not in our db
  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists()); 
   
  if(!userSnapShot.exists()){
    const {displayName,email}=userAuth; 
    const createdAt=new Date(); 
    try{
       await setDoc(userDocRef,{
        displayName,email,createdAt,...additionalInformation
       })
    }catch(error){ 
      console.log('not created',error)

    }
  } 
  return userDocRef
};
 
export const createAuthUserWithEmailAndPassword= async(email,password)=>{
  if(!email || !password)return; 
   
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword =async (email,password)=>{
  if(!email || !password) return; 
   
  return await signInWithEmailAndPassword(auth,email,password)
}