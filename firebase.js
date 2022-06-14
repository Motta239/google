import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDM7MRMISD-hOotv4pJRxEbI1Q-hZxQFy4',
  authDomain: 'facebook-clone-b27b8.firebaseapp.com',
  projectId: 'facebook-clone-b27b8',
  storageBucket: 'facebook-clone-b27b8.appspot.com',
  messagingSenderId: '242169864446',
  appId: '1:242169864446:web:294a80a9279836d1cec5af',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
