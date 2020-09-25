//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBPd5IVdR3sLa-xHEbAuN0SOqlDIRNkJfQ',
  authDomain: 'instagram-reels-react-clone.firebaseapp.com',
  databaseURL: 'https://instagram-reels-react-clone.firebaseio.com',
  projectId: 'instagram-reels-react-clone',
  storageBucket: 'instagram-reels-react-clone.appspot.com',
  messagingSenderId: '32351561134',
  appId: '1:32351561134:web:bae5cb57d37f89e570543f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
