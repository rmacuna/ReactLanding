import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './app.routing';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBi-egFQ87ZKj_l2QlEzahtXCGHXrjTXWQ",
    authDomain: "loudify.firebaseapp.com",
    databaseURL: "https://loudify.firebaseio.com",
    projectId: "loudify",
    storageBucket: "loudify.appspot.com",
    messagingSenderId: "740690972444",
    appId: "1:740690972444:web:4887542850dd9e62"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
