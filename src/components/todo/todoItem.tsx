import { useState } from 'react'
import { Todo } from '../../types/todo'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md'
import styles from './todoItem.module.css'
type Props = {
  data: Todo
}
export default function TodoItem({ data }: Props) {
  const {
    category,
    title,
    start,
    end,
    status,
    repeat,
    memo,
  } = { ...data }

  const [open, setOpen] = useState(false)
  const color = {
    공부: '#9ED2BE',
    업무: '#9E9FA5',
    여가: '#FFC6AC',
  }

  const categoryColor =
    color[category as keyof typeof color] || '#FFFFFF'

  return (
    <ol className={`p-2 ${styles.container}`}>
      <div className='flex items-center '>
        <li
          className={`text-sm px-2  rounded flex-none text-white`}
          style={{ background: categoryColor }}
        >
          {category}
        </li>
        <li className='ml-2 flex-auto'>{title}</li>
        {open === false ? (
          <BiChevronDown
            fill='#ccc'
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <BiChevronUp
            fill='#ccc'
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
        <li className='px-2'>
          {status ? (
            <MdCheckBoxOutlineBlank fill='#bbb' />
          ) : (
            <MdCheckBox fill={categoryColor} />
          )}
        </li>
      </div>
      {open && (
        <div>
          <li>
            <span className='text-sm mr-2'>⏰ 시간</span>{' '}
            {start} ~ {end}
          </li>
          <li>
            <p className='text-sm'>🗒️ 메모</p>
            <div
              className={`p-2 ${styles['bg-yellow']} rounded`}
            >
              {memo}
            </div>
          </li>
        </div>
      )}
    </ol>
  )
}
