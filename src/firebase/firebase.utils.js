import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXJnrhfwIvaqfb2QaPlHOtDjFFmpy4sOM",
    authDomain: "crwn-db-f99ad.firebaseapp.com",
    projectId: "crwn-db-f99ad",
    storageBucket: "crwn-db-f99ad.appspot.com",
    messagingSenderId: "846995458870",
    appId: "1:846995458870:web:9187f865dbcc8db12bc197",
    measurementId: "G-XHEPHS25L0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;