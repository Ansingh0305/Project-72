import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAvDTx_BDNeTKj2WhepVBlPG7VzFx4L21I",
    authDomain: "story-hub-6a1ed.firebaseapp.com",
    databaseURL: "https://story-hub-6a1ed.firebaseio.com",
    projectId: "story-hub-6a1ed",
    storageBucket: "story-hub-6a1ed.appspot.com",
    messagingSenderId: "727339828770",
    appId: "1:727339828770:web:d1241ab8c185d409d32c7b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
