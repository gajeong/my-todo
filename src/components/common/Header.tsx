import { useState } from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import { TbCalendarHeart } from 'react-icons/tb'
import styles from './header.module.css'
export default function Header() {
  const [user, setUser] = useState('7rgoong')

  return (
    <header className='font text-[#8a8a8a] flex'>
      <div className=' p-4 '>{user}</div>
      <div className=''>
        <TiThMenuOutline className={styles.item} />
        <p>Menu</p>
      </div>
      <div className=''>
        <TbCalendarHeart className='' />
        <p>Projects</p>
      </div>
    </header>
  )
}
