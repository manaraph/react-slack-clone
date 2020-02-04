import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDQjaV7ADCZC_TEEngONxc1Sw55p2_XCC4',
  authDomain: 'react-slack-clone-2fe7c.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-2fe7c.firebaseio.com',
  projectId: 'react-slack-clone-2fe7c',
  storageBucket: 'react-slack-clone-2fe7c.appspot.com',
  messagingSenderId: '165758155408',
  appId: '1:165758155408:web:dc6344de699e5aa066f615',
  measurementId: 'G-X64SVW174Q',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
