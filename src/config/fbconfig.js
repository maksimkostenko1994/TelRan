import firebase from "firebase/compat";
//import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB4NYYFvKiHp7hyU_I-41WouU0UrXjqlCw",
    authDomain: "personal-todo-e6482.firebaseapp.com",
    projectId: "personal-todo-e6482",
    storageBucket: "personal-todo-e6482.appspot.com",
    messagingSenderId: "826029525309",
    appId: "1:826029525309:web:dcf01d9c0df3f564a3dd54"
};

firebase.initializeApp(firebaseConfig);

export const fbAuth = firebase.auth()

//export {fbAuth}