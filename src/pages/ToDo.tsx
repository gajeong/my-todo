import { MouseEvent, useState } from 'react'
import Button from '../components/common/Button'
import TodoList from '../components/todo/todolist'
import styles from './ToDo.module.css'
import { TbCategory } from 'react-icons/tb'
import CategoryList from '../components/todo/categoryList'
export default function ToDo() {
  const [open, setOpen] = useState(false)
  const openModal = (e: MouseEvent) => {
    e.stopPropagation()
    setOpen((prev) => !prev)
  }
  return (
    <section className='h-full relative'>
      <h1 className='text-3xl text-center underline underline-offset-4 my-6'>
        Create a Life Full Of Values
      </h1>
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
