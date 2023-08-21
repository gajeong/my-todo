import { Category } from '../../types/category'
import { write, db } from '../firebase'
import {
  equalTo,
  get,
  query,
  ref,
  remove,
} from 'firebase/database'

async function readActiveCategory(
  status: string
): Promise<Category[]> {
  const categoryRef = ref(db, 'posts/category')
  const statusQuery = query(
    categoryRef,
    equalTo('status', status)
  )

  return get(statusQuery).then((snapshot) => {
    const categoryData = snapshot.val()
    if (categoryData) {
      return Object.values(categoryData)
    }
    return []
  })
}

async function readCategory(): Promise<Category[]> {
  return await get(ref(db, 'posts/category')).then(
    (snapshot) => {
      if (snapshot.exists())
        return Object.values(snapshot.val())
      return []
    }
  )
}

function addCategory(data: Category) {
  return write(`posts/category/${data.id}`, {
    ...data,
    createdAt: Date(),
  })
}

async function delCategory(id: string) {
  return remove(ref(db, `posts/category/${id}`))
}

async function changeStatus(data: Category) {
  return write(`posts/category/${data.id}`, { data })
}
export {
  readCategory,
  addCategory,
  readActiveCategory,
  delCategory,
  changeStatus,
}
