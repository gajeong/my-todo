import React from 'react'
import { TfiWrite } from 'react-icons/tfi'
export default function Posts() {
  return (
    <section className='relative'>
      <h2 className='text-xl text-center py-4  underline underline-offset-4'>
        🌈최신 포스트
      </h2>
      <TfiWrite
        fill='#bbb'
        className='absolute right-0 top-5'
      />
    </section>
  )
}
