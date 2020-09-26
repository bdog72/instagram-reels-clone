//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDFOZEeqSXV6ZTvnMpb1KWu-S5GX49B3xA',
  authDomain: 'whatsapp-clone-react-bb86b.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-react-bb86b.firebaseio.com',
  projectId: 'whatsapp-clone-react-bb86b',
  storageBucket: 'whatsapp-clone-react-bb86b.appspot.com',
  messagingSenderId: '451681786894',
  appId: '1:451681786894:web:c5dd1321f9a75785f2705f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
