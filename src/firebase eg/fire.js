import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAlRQqf0tCTWJJ-1fgZ7YHPaUEq2RCAQp4",
    authDomain: "flash-ocean-518.firebaseapp.com",
    databaseURL: "https://flash-ocean-518.firebaseio.com",
    projectId: "flash-ocean-518",
    storageBucket: "flash-ocean-518.appspot.com",
    messagingSenderId: "514420546746"
  };
var fire = firebase.initializeApp(config);
export default fire;

