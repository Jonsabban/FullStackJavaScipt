import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCJ1JV4pZxpGW8UGoNo0IxejYcjKAV3JXU",
    authDomain: "react-firebase-1c9b3.firebaseapp.com",
    databaseURL: "https://react-firebase-1c9b3.firebaseio.com",
    projectId: "react-firebase-1c9b3",
    storageBucket: "react-firebase-1c9b3.appspot.com",
    messagingSenderId: "189395409447"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};