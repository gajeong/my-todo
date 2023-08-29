import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState, ChangeEvent } from 'react'
import Button from './Button'
import { useQuery } from 'react-query'
import { readCategory } from '../../api/category'
import { getDate } from '../../util/timeago'
import { v4 as uuid } from 'uuid'
import {
  BsFillUnlockFill,
  BsFillLockFill,
} from 'react-icons/bs'
export default function Editor({
  title,
}: {
  title: string
}) {
  const [data, setData] = useState('')
  const {
    isLoading,
    data: categories,
    isError,
  } = useQuery(
    ['categories', 'read'],
    async () =>
      await readCategory().then((res) => {
        setPost({ ...post, category: res && res[0].name })
        return res
      }),
    { staleTime: 1000 * 60 }
  )

  const [post, setPost] = useState({
    id: uuid(),
    category: '',
    title: '',
    content: '',
    date: getDate(new Date()),
    public: true,
  })
  const handleChangeContent = (data: string) => {
    setPost({ ...post, content: data })
  }
  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setPost({ ...post, [name]: value })
  }
  return (
    <main>
      <div className='flex mb-2 gap-2 items-center '>
        <div
          className='p-2'
          onClick={() =>
            setPost({ ...post, public: !post.public })
          }
        >
          {post.public ? (
            <BsFillUnlockFill />
          ) : (
            <BsFillLockFill />
          )}
        </div>
        <input
          placeholder='제목'
          type='text'
          className='block grow px-2s'
          name='title'
          onChange={handleChange}
          value={post.title}
        />
        <Button classname='border w-[200px] rounded-lg'>
          {title}
        </Button>
      </div>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          handleChangeContent(editor.getData())
        }}
        config={{
          language: 'ko',
        }}
      ></CKEditor>
    </main>
  )
}
