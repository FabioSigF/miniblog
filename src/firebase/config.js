
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBnunbxLHolusDU4FitCBov06HtOFQa6Do",
  authDomain: "miniblog-c1823.firebaseapp.com",
  projectId: "miniblog-c1823",
  storageBucket: "miniblog-c1823.appspot.com",
  messagingSenderId: "988560804985",
  appId: "1:988560804985:web:88ae93603861f53707d8a8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };