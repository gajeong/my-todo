import { useState, ChangeEvent } from 'react'
import Modal from '../common/Modal'
import { useQuery, useQueryClient } from 'react-query'
import { readCategory } from '../../api/category'
import { useImmer } from 'use-immer'
import { Category } from '../../types/category'
import styles from './addTodoModal.module.css'
import Calendar from '../common/Calendar'
import Button from '../common/Button'
import TimePickerComponent from '../common/TimePicker'
import { v4 as uuid } from 'uuid'
import { addTodo } from '../../api/todo'

type Props = {
  date: Date
  open: boolean
  setOpen: (state: boolean) => void
}
export default function AddTodoModal({
  date,
  open,
  setOpen,
}: Props) {
  const [todo, setTodo] = useState({
    id: uuid(),
    category: '',
    title: '',
    start: '',
    date: date,
    end: '',
    status: 0,
    repeat: false,
    memo: '',
  })

  const [categories, updateCategories] = useImmer<
    Category[]
  >([])
  const { isLoading, data, isError } = useQuery(
    ['categories', 'read'],
    async () =>
      await readCategory().then((res) => {
        updateCategories([...res])
        return res
      }),
    { staleTime: 1000 * 60 }
  )
  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setTodo({ ...todo, [name]: value })
  }

  const handleAdd = () => {
    addTodo(todo).then(() => setOpen(false))
  }
  return (
    <div className='w-fit border absolute top-0 rounded'>
      <Modal setOpen={setOpen} open={open}>
        <h3 className='text-gray'>ToDo 추가</h3>
        <hr />
        {isLoading && <span>loading ...</span>}
        {isError && <span>error ...</span>}
        {categories.length && (
          <dd className='flex py-2'>
            📂
            <select
              className='outline-1 outline-offset-4 outline-[#a1a1a1] px-4 border hover:cursor-pointer rounded'
              name='category'
              onChange={handleChange}
            >
              {categories?.map((category) => (
                <option
                  key={category.id}
                  className='outline-none text-white'
                  style={{ background: category.color }}
                >
                  <li
                    style={{ background: category.color }}
                  >
                    {category.name}
                  </li>
                </option>
              ))}
            </select>
            <input
              type='text'
              className='block grow px-2'
              name='title'
              onChange={handleChange}
              value={todo.title}
            />
          </dd>
        )}

        <dd className='py-2'>
          📆 <Calendar selected={date} />
        </dd>
        <dd className='py-2 flex '>
          ⏰{' '}
          <TimePickerComponent
            value={todo.start}
            name='start'
            onChange={() => setTodo}
          />{' '}
          ~{' '}
          <TimePickerComponent
            value={todo.end}
            name='end'
            onChange={() => setTodo}
          />
        </dd>
        <dd>
          <p>🗒️메모</p>
          <textarea
            rows={4}
            style={{ resize: 'none' }}
            className={`w-full p-2 text-sm rounded ${styles['bg-yellow']}`}
            name='memo'
            onChange={handleChange}
          />
        </dd>

        <div onClick={handleAdd}>
          <Button classname='border'>추가</Button>
        </div>
      </Modal>
    </div>
  )
}
