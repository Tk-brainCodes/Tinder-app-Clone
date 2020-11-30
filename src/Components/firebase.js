import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfWTD8_IQITicSbxN0X1c3-xjgkktuFDw",
    authDomain: "tinder-clone-67749.firebaseapp.com",
    databaseURL: "https://tinder-clone-67749.firebaseio.com",
    projectId: "tinder-clone-67749",
    storageBucket: "tinder-clone-67749.appspot.com",
    messagingSenderId: "792189107941",
    appId: "1:792189107941:web:a54623960aa055ddc61e0c",
    measurementId: "G-X3K8GYWL14"
  };

//initialize the database  
 const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore is the real time database that fire store offers
 const database = firebaseApp.firestore();

 export default database;