import { fetchPlayList } from '../../api/playlist'
import { QueryObserverResult, useQuery } from 'react-query'
import { playlist, video } from '../../types/video'
import PlayItem from './playItem'
import MultiCarousel from '../common/MultiCarousel'

export default function PlayList() {
  const {
    isLoading,
    isError,
    data: playlist,
    error,
  }: QueryObserverResult<playlist> = useQuery(
    'playlist',
    fetchPlayList
  )
  return (
    <section className='w-3/5 h-80'>
      {playlist?.data.items.length && (
        <MultiCarousel>
          {playlist?.data.items.map((item) => (
            <div>
              <PlayItem
                video={item}
                key={item.id.videoId}
              />
            </div>
          ))}
        </MultiCarousel>
      )}
    </section>
  )
}
