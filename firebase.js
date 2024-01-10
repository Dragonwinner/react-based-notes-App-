import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK_sJxsm_-mEY7ilIiwL0Kx0IweO2Dtvg",
  authDomain: "reactnotes-7534a.firebaseapp.com",
  projectId: "reactnotes-7534a",
  storageBucket: "reactnotes-7534a.appspot.com",
  messagingSenderId: "745084883276",
  appId: "1:745084883276:web:5c4923d6c06f8a5dc4bfe9",
  measurementId: "G-C53P0CR3Q9"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
