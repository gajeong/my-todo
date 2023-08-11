import axios from 'axios'
import { VideoList } from '../types/video'

export const fetchPlayList = async (
  searchKey: string
): Promise<VideoList> => {
  try {
    return await axios.get(`/data/${searchKey}.json`)
  } catch (err) {
    throw err
  }
}
