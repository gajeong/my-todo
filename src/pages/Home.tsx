import React from 'react'
import Info from '../components/info/Info'
import PlayList from '../components/playlist/playlist'
export default function Home() {
  return (
    <section className='flex h-full'>
      <Info />
      <PlayList />
    </section>
  )
}
