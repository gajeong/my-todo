import { Post } from '../../types/post'
import { write, db } from '../firebase'
import { set, ref, get } from 'firebase/database'

async function addPost(data: Post) {
  return await write(
    `posts/${data.category}/${data.id}`,
    data
  )
}

async function getPostByCategory(category: string) {
  return await get(ref(db, `posts/${category}`)).then(
    (snapshot) => {
      if (snapshot.exists())
        return Object.values(snapshot.val())
      return []
    }
  )
}

export { addPost, getPostByCategory }
