import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDwibK_Hw9O5e9IKi3yYIPbzoIHwLSgQcY',
  authDomain: 'finance-2a4d6.firebaseapp.com',
  projectId: 'finance-2a4d6',
  storageBucket: 'finance-2a4d6.appspot.com',
  messagingSenderId: '590089754466',
  appId: '1:590089754466:web:2517d19de9f6d2c08bbe3b',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
