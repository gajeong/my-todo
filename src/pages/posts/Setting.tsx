import React from 'react'
import EditCategory from '../../components/posts/setting/EditCategory'

export default function Setting() {
  return (
    <section className='relative'>
      <h3 className='text-center text-xl font-semibold py-4 underline underline-offset-4'>
        게시물 설정
      </h3>
      <EditCategory />
    </section>
  )
}
