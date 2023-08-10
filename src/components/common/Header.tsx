import { useState } from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import { TbCalendarHeart } from 'react-icons/tb'
import Button from './Button'
import styles from './header.module.css'
import { login } from '../../api/firebase'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const [user, setUser] = useState('7rgoong')
  const navigation = useNavigate()
  return (
    <header className='font text-[#8a8a8a] flex items-center p-2'>
      <div
        className='mx-4 border-r-2 pr-5 cursor-pointer'
        onClick={() => navigation('/')}
      >
        {user}
      </div>
      <Button>
        <div
          className={styles.item}
          onClick={() => navigation('/todo')}
        >
          <TiThMenuOutline />
          <p className='px-2'>Menu</p>
        </div>
      </Button>
      <Button>
        <div className={styles.item}>
          <TbCalendarHeart />
          <p className='px-2'>Projects</p>
        </div>
      </Button>
    </header>
  )
}
