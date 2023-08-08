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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getDatabase(app)
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
  await get(child(dbRef, url))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No Data')
      }
    })
    .catch(console.error)
}

export async function write(url: string, data: Object) {
  await set(ref(db, url), data)
}
