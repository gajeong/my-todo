import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth'
import {
  getDatabase,
  ref,
  child,
  get,
  set,
} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to usei
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationi
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()
export const db = getDatabase(app)
const dbRef = ref(getDatabase(app))

export function login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      console.log(user)
    })
    .catch(console.error)
}

export async function read(url: string) {
  try {
    const snapshot = await get(child(dbRef, url))
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      return []
    }
  } catch (error) {
    throw error
  }
}

export async function write(url: string, data: Object) {
  await set(ref(db, url), data)
}
