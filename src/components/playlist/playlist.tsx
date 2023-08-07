import { fetchPlayList } from '../../api/playlist'
import { QueryObserverResult, useQuery } from 'react-query'
import {
  VideoList,
  SearchData,
  video,
} from '../../types/video'
import PlayItem from './playItem'
import MultiCarousel from '../common/MultiCarousel'

export default function PlayList({
  keyword,
  fetch,
}: {
  keyword: string
  fetch: (keyword: string) => Promise<VideoList>
}) {
  const {
    isLoading,
    isError,
    data: playlist,
    error,
  }: QueryObserverResult<VideoList> = useQuery(
    'playlist',
    async () => await fetch(keyword)
  )
  return (
    <section className='w-3/5 h-fit px-8 '>
      <p className='w-fit bg-gray-100 p-1 text-sm rounded-md italic'>
        #{keyword}
      </p>
      {playlist?.data.items.length && (
        <MultiCarousel>
          {playlist?.data.items.map((item) => (
            <PlayItem video={item} key={item.id.videoId} />
          ))}
        </MultiCarousel>
      )}
    </section>
  )
}
