import React from 'react'
import { video } from '../../types/video'
type props = {
  video: video
}
export default function PlayItem({ video }: props) {
  return (
    <div className='px-2 h-full py-4 cursor-pointer hover:shadow-lg font'>
      <img
        className='w-full h-100 bg-cover'
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
      />
      <p className='mt-2 line-clamp-3'>
        {video.snippet.title}
      </p>
    </div>
  )
}
