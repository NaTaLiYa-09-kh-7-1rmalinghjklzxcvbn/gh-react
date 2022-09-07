import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvuuK9jNyVeB4AijwXUamrlkEcCfMdcWI",
    authDomain: "fir-project9-69271.firebaseapp.com",
    projectId: "fir-project9-69271",
    storageBucket: "fir-project9-69271.appspot.com",
    messagingSenderId: "325597215937",
    appId: "1:325597215937:web:ee7697749a55a32980a840"
}

const firebaseDB = firebase.initializeApp(firebaseConfig)
export const db = firebaseDB.database().ref()
export const auth = firebase.auth();
