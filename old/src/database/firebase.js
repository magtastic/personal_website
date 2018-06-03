import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCCQMZoqCeDfrE_-mupiI6P8koe2WJRHSc",
  authDomain: "heimasida-ferilskra.firebaseapp.com",
  databaseURL: "https://heimasida-ferilskra.firebaseio.com",
  projectId: "heimasida-ferilskra",
  storageBucket: "",
  messagingSenderId: "591943617858"
};

export default firebase.initializeApp(config);