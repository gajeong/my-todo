import axios from 'axios'
import { VideoList } from '../types/video'

export const fetchPlayList = async (
  keyword: string
): Promise<VideoList> => {
  try {
    return await axios.get('/data/list.json')
  } catch (err) {
    throw err
  }
}
