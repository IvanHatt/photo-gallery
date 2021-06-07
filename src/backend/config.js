import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAj1Ylli9IH-6megtfa9ikEdjtfRxt-1G4',
  authDomain: 'photo-gallery-fba23.firebaseapp.com',
  projectId: 'photo-gallery-fba23',
  storageBucket: 'photo-gallery-fba23.appspot.com',
  messagingSenderId: '314363516778',
  appId: '1:314363516778:web:4f420f5d4ce79ce2337713',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectStorage, timestamp }
