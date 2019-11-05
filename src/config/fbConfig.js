import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLYjhuYpnCsLNl5k9ngsP3DJOd5ppxkRY",
    authDomain: "proyectofitnet-26883.firebaseapp.com",
    databaseURL: "https://proyectofitnet-26883.firebaseio.com",
    projectId: "proyectofitnet-26883",
    storageBucket: "proyectofitnet-26883.appspot.com",
    messagingSenderId: "361202378748",
    appId: "1:361202378748:web:93576a06ef31b7bfb33479"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots : true})

  export default firebase