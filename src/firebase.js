  import firebase from 'firebase/app';
  import 'firebase/database'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB_xKX9CUhjvzTal_XrYqsW-LAPU52L150",
    authDomain: "comments-4b2fa.firebaseapp.com",
    projectId: "comments-4b2fa",
    storageBucket: "comments-4b2fa.appspot.com",
    messagingSenderId: "978746634514",
    appId: "1:978746634514:web:29f74adfa9167fd53203cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();