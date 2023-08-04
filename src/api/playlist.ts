import axios from 'axios'

export const fetchPlayList = async () => {
  try {
    return await axios.get('/data/list.json')
  } catch (err) {
    return err
  }
}
