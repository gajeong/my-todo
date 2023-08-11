import { MouseEvent, useState } from 'react'
import Button from '../components/common/Button'
import TodoList from '../components/todo/todolist'
import styles from './ToDo.module.css'
import { TbCategory } from 'react-icons/tb'
import CategoryList from '../components/todo/categoryList'
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs'
export default function ToDo() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const openModal = (e: MouseEvent) => {
    e.stopPropagation()
    setOpen((prev) => !prev)
  }

  return (
    <section className='relative'>
      <h1 className='text-3xl text-center underline underline-offset-4 my-6'>
        Create a Life Full Of Values
      </h1>
      <h3 className='text-center flex items-center justify-center gap-2'>
        <BsCaretLeft
          className='fill-[#a1a1a1] hover:fill-[#1a1a1a]'
          onClick={() =>
            setDate((prev) => {
              const newDate = new Date(prev)
              newDate.setDate(newDate.getDate() - 1)
              return newDate
            })
          }
        />
        {new Intl.DateTimeFormat('ko')
          .format(date)
          .slice(0, -1)}
        <BsCaretRight
          className='fill-[#a1a1a1] hover:fill-[#1a1a1a]'
          onClick={() =>
            setDate((prev) => {
              const newDate = new Date(prev)
              newDate.setDate(newDate.getDate() + 1)
              return newDate
            })
          }
        />
      </h3>
      <div
        className='absolute top-0 right-0'
        onClick={openModal}
      >
        <Button>
          <TbCategory stroke='#a1a1a1' size={20} />
        </Button>
      </div>
      <TodoList />
      <CategoryList open={open} setOpen={setOpen} />
    </section>
  )
}
