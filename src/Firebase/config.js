import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqdkMYrebyqjZl289mXCkQObqzbi69XIY",
  authDomain: "olx-clone-e3593.firebaseapp.com",
  projectId: "olx-clone-e3593",
  storageBucket: "olx-clone-e3593.appspot.com",
  messagingSenderId: "908141892597",
  appId: "1:908141892597:web:a24a3e6588f3056106c6bc",
  measurementId: "G-J267JTCHQ7"
};

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app);
  const storage = getStorage(app);
  export {db,auth,storage}