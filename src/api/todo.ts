import { Todo } from '../types/todo'
import { write, db } from './firebase'
import {
  set,
  ref,
  get,
  update,
  remove,
} from 'firebase/database'

function addTodo(data: Todo) {
  return write(`todo/${data.date}/${data.id}`, data)
}

export { addTodo }
