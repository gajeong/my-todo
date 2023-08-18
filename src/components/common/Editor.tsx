import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import Button from './Button'
import { useQuery } from 'react-query'
import { readCategory } from '../../api/category'
export default function Editor() {
  const [data, setData] = useState('')
  const {
    isLoading,
    data: categories,
    isError,
  } = useQuery(
    ['categories', 'read'],
    async () => await readCategory().then((res) => res),
    { staleTime: 1000 * 60 }
  )
  return (
    <main>
      <Button>게시글 등록</Button>
      <CKEditor
        editor={ClassicEditor}
        data={data}
        onChange={(event, editor) => {
          setData(editor.getData())
        }}
      ></CKEditor>
    </main>
  )
}
