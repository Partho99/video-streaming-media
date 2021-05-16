import Firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth'
import {seedDatabase} from "../seed";

const firebaseConfig = {
    apiKey: "AIzaSyA7CB5vObcVG78h2_5NvgI7MWJNJhMzkHc",
    authDomain: "react-firebase-streaming-media.firebaseapp.com",
    projectId: "react-firebase-streaming-media",
    storageBucket: "react-firebase-streaming-media.appspot.com",
    messagingSenderId: "273094418417",
    appId: "1:273094418417:web:3695303a29dd1ad35eee50"
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDatabase(firebase);

export {firebase};