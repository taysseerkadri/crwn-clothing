import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAv0IMovAd3iEbuY_KjKd0-MOMmi_O7MfI",
  authDomain: "crwn-db-7396d.firebaseapp.com",
  projectId: "crwn-db-7396d",
  storageBucket: "crwn-db-7396d.appspot.com",
  messagingSenderId: "1089773543108",
  appId: "1:1089773543108:web:b7f6ca428189139b65f391",
  measurementId: "G-SG0NDYKK9V"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;