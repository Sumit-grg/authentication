import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// specific mealworm firebase database setup
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCccgSU8DQpiGe06ZMSE-1h46LMjK5flNU',
  authDomain: 'mealworm-toby.firebaseapp.com',
  databaseURL: 'https://mealworm-toby.firebaseio.com',
  projectId: 'mealworm-toby',
  storageBucket: 'mealworm-toby.appspot.com',
  messagingSenderId: '19444126471',
  appId: '1:19444126471:web:a9ae817e194e4a613e2ba2'
});

export const firestore = firebase.firestore();

// set authentication provider on firebase to be google.
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
