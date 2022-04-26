import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getStorage,ref } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
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
  
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

 const firebaseConfig = {
  apiKey: "AIzaSyAdpQXKg55Cbra_BW6AUNq5qhv38V2hF88",
  authDomain: "red-social-asia-mania.firebaseapp.com",
  databaseURL: "https://red-social-asia-mania-default-rtdb.firebaseio.com",
  projectId: "red-social-asia-mania",
  storageBucket: "red-social-asia-mania.appspot.com",
  messagingSenderId: "1078986064606",
  appId: "1:1078986064606:web:4a0cb964406a768abab84f",
  measurementId: "G-SQTD9N5WER"
};
//const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

//export const storage = getStorage();
//export const storageRef = ref();

export const saveTask = ( description) =>
  addDoc(collection(db, "newPost"), { description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "newPost"), callback);
  
export const deleteTask = (id) => deleteDoc(doc(db, "newPost", id));
export const getTask = (id) => getDoc(doc(db, "newPost", id));
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "newPost", id), newFields);
export const getTasks = () => getDocs(collection(db, "newPost"));

