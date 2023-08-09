import Info from '../components/info/Info'
import PlayList from '../components/playlist/playlist'
import { fetchPlayList } from '../api/playlist'
export default function Home() {
  return (
    <section className='flex h-full  max-sm:flex-col'>
      <Info />
      <PlayList keyword='자기 개발' fetch={fetchPlayList} />
    </section>
  )
}
