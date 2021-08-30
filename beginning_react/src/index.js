import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-1eB5DfEaxsU_dBVhydTCnc3wup3HC2s",
    authDomain: "crudloginservice1.firebaseapp.com",
    projectId: "crudloginservice1",
    storageBucket: "crudloginservice1.appspot.com",
    messagingSenderId: "937070962881",
    appId: "1:937070962881:web:0a563759675d02b6318c40",
    measurementId: "G-P885XCGMM3"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();