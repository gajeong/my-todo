import { Todo } from '../types/todo'
import firebase from 'firebase/compat/app'
import { write, db } from './firebase'
import {
  set,
  ref,
  get,
  update,
  remove,
  getDatabase,
  onValue,
} from 'firebase/database'

function addTodo(data: Todo) {
  return write(`todo/${data.date}/${data.id}`, {
    ...data,
  })
}

async function readTodo(date: string): Promise<Todo[]> {
  return await get(ref(db, `todo/${date}`)).then(
    (snapshot) => {
      if (snapshot.exists())
        return Object.values(snapshot.val())
      return []
    }
  )
}

async function delTodo(date: string, id: string) {
  console.log(date, id)
  return remove(ref(db, `todo/${date}/${id}`))
}

export { addTodo, readTodo, delTodo }
