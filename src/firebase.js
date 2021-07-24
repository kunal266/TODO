import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDg11oVFpNRj31D7k2pYCJ6Kcz9mxULHog",
    authDomain: "todo-list-c4359.firebaseapp.com",
    projectId: "todo-list-c4359",
    storageBucket: "todo-list-c4359.appspot.com",
    messagingSenderId: "527037681716",
    appId: "1:527037681716:web:1451de8f42b296acc73a61"
})
export {firebaseConfig as firebase}