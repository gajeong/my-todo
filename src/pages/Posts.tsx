import React from 'react'
import { TfiWrite } from 'react-icons/tfi'
import { FiSettings } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
export default function Posts() {
  const navigate = useNavigate()
  return (
    <section className='relative'>
      <h2 className='text-xl text-center py-4  underline underline-offset-4 '>
        🌈최신 포스트
      </h2>
      <TfiWrite
        fill='#bbb'
        className='absolute right-7 top-5'
        onClick={() => navigate('/posts/create')}
      />
      <FiSettings
        stroke='#bbb'
        className='absolute right-0 top-5'
        onClick={() => navigate('/posts/setting')}
      />
    </section>
  )
}
