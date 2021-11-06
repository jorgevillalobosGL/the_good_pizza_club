// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fireBaseConfig = {
    projectId: 'the-good-pizza-club',
    appId: '1:705243269757:web:eac1dea0e1c7a1a690bf14',
    storageBucket: 'the-good-pizza-club.appspot.com',
    locationId: 'us-east1',
    apiKey: 'AIzaSyCcAC85Z1L19XUe3o3UgR_NfAH5ST88IAE',
    authDomain: 'the-good-pizza-club.firebaseapp.com',
    messagingSenderId: '705243269757',
  };

firebase.initializeApp(fireBaseConfig);
attachCustomCommands({ Cypress, cy, firebase });
