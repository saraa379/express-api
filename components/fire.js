import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDKKMjqyvzJcmO4c2y2rG_8ZAB6UANPMoc",
    authDomain: "express-app-6eaa3.firebaseapp.com",
    databaseURL: "https://express-app-6eaa3.firebaseio.com",
    projectId: "express-app-6eaa3",
    storageBucket: "express-app-6eaa3.appspot.com",
    messagingSenderId: "121493773188"
  };
  //var fire = firebase.initializeApp(config);
  //const db = firebase.database();
  var fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default fire;

