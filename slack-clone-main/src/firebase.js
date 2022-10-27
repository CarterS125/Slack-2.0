import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzV3WljQtjPAYlgyxWRNGiv7rOmGdVUZk",
  authDomain: "slack-clone-redux-15927.firebaseapp.com",
  projectId: "slack-clone-redux-15927",
  storageBucket: "slack-clone-redux-15927.appspot.com",
  messagingSenderId: "122255352086",
  appId: "1:122255352086:web:9c62851bff6a7eecc5b037",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
