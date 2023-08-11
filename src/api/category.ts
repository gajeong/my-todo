import { Category } from '../types/category'
import { read, write, db } from './firebase'
import {
  set,
  ref,
  get,
  update,
  remove,
} from 'firebase/database'

async function readCategory(): Promise<Category[]> {
  return await get(ref(db, 'todo/category')).then(
    (snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val())
      }
      return []
    }
  )
}

function addCategory(data: Category) {
  return write(`todo/category/${data.id}`, data)
}

function delCategory(id: string) {
  return remove(ref(db, `todo/category/${id}`))
}

export { readCategory, addCategory, delCategory }
