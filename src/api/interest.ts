import {
  getDatabase,
  ref,
  set,
  child,
  get,
} from 'firebase/database'
import { Interest } from '../types/interest'
import { write, read } from './firebase'

function writeInterest(data: Interest) {
  write('interest', data)
}

function readInterest() {
  read('interest')
}

export { writeInterest, readInterest }
