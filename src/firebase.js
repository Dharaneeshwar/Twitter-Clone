import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBONxwfMm-LZRh1xKKZYPfEMAZT3JYZmKA",
    authDomain: "twitter-clone-30cf3.firebaseapp.com",
    projectId: "twitter-clone-30cf3",
    storageBucket: "twitter-clone-30cf3.appspot.com",
    messagingSenderId: "1071801160902",
    appId: "1:1071801160902:web:43f78938c82105016ff3c7",
    measurementId: "G-LS67TBZX5V"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore(); 

export default db;