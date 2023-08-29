import Editor from '../components/common/Editor'

export default function CreatePost() {
  return (
    <section>
      <div className='text-center text-lg text-gray-400 font-semibold py-5 underline underline-offset-4'>
        새 포스트 작성
      </div>

      <Editor title='게시글 등록' />
    </section>
  )
}
