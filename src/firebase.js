import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBrnpqcwsjJHdDhj2HINP46dox6aHJKSu0',
  authDomain: 'react-firebase-demo-50634.firebaseapp.com',
  projectId: 'react-firebase-demo-50634',
  storageBucket: 'react-firebase-demo-50634.appspot.com',
  messagingSenderId: '110344948029',
  appId: '1:110344948029:web:17485d18f0c6ff0243dd54',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const balanceCollection = db.collection('balance')

export default db
export { balanceCollection }
