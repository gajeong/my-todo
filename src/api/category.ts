import { Category } from '../types/category'
import { read, write } from './firebase'

function readCategory() {
  return read('todo/category')
}

function writeCategory(data: Category) {
  console.log(data)
  return write('todo/category', data)
}

export { readCategory, writeCategory }
