import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBctLuXhn4xafhgKm4QQ0L3R8IXGNYr4i4",
  authDomain: "meditationapp-mindfulness.firebaseapp.com",
  projectId: "meditationapp-mindfulness",
  storageBucket: "meditationapp-mindfulness.appspot.com",
  messagingSenderId: "366954436577",
  appId: "1:366954436577:web:db772d5aab12dd0bec64a0",
  measurementId: "G-R3RMGNQ5RB"
  };
   const app = firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();
  
  export const db = firebase.firestore();
  export const usersCollection = db.collection('users');
  export const sessionsCollection = db.collection('sessions')
  
  
  
  
  export default firebase;