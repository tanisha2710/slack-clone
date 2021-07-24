import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoIkuaVNGAVcEC5MR5ZCzNCn9QUZPB-4Y",
  authDomain: "clone-for-slack.firebaseapp.com",
  projectId: "clone-for-slack",
  storageBucket: "clone-for-slack.appspot.com",
  messagingSenderId: "335047850737",
  appId: "1:335047850737:web:7b19ed5a7e0c721e778750"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };