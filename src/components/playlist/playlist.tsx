import { QueryObserverResult, useQuery } from 'react-query'
import {
  VideoList,
  SearchData,
  video,
} from '../../types/video'
import PlayItem from './playItem'
import MultiCarousel from '../common/MultiCarousel'
import { fetchPlayList } from '../../api/playlist'
export default function PlayList({
  keyword,
  searchKey,
}: {
  keyword: string
  searchKey: string
}) {
  const {
    isLoading,
    data: playlist,
    error,
  }: QueryObserverResult<VideoList> = useQuery(
    ['playlist', searchKey],
    async () => {
      return await fetchPlayList(searchKey)
    }
  )
  return (
    <section>
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
