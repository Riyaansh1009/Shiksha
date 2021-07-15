import firebase from 'firebase'
require('@firebase/firestore');
  // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD4GbEy7ZO5bLl6lmU0QML4OojE9m_xLZA",
    authDomain: "shiksha-3f842.firebaseapp.com",
    databaseURL: "https://shiksha-3f842-default-rtdb.firebaseio.com",
    projectId: "shiksha-3f842",
    storageBucket: "shiksha-3f842.appspot.com",
    messagingSenderId: "969733900598",
    appId: "1:969733900598:web:6c9e766ac9d95421f58b97"
  };
  // Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();