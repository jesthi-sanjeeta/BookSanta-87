import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDqfoaJFzQv8iio_g9TEhTtPmsAGa4HRTE",
  authDomain: "booksanta2-f94a5.firebaseapp.com",
  projectId: "booksanta2-f94a5",
  storageBucket: "booksanta2-f94a5.appspot.com",
  messagingSenderId: "487461698943",
  appId: "1:487461698943:web:864fa8e53009667564ae4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();