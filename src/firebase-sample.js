import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDQWYV7ADCZC_BttngPOxc1Sw55p2_CCC4',
  authDomain: 'react-slack-clone-3yd5w.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-3yd5w.firebaseio.com',
  projectId: 'react-slack-clone-3yd5w',
  storageBucket: 'react-slack-clone-3yd5w.appspot.com',
  messagingSenderId: '408758575408',
  appId: '1:408758575408:web:d066f6e58575aa066f615',
  measurementId: 'G-XSVW1VW1X64',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
