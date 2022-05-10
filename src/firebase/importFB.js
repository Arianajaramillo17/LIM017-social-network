/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

export { initializeApp };

export {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
};

export {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
};
