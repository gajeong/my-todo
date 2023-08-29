import { useState, ChangeEvent } from 'react'
import Modal from '../common/Modal'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { readCategory } from '../../api/category'

import styles from './addTodoModal.module.css'
import Calendar from '../common/Calendar'
import Button from '../common/Button'
import TimePickerComponent from '../common/TimePicker'
import { v4 as uuid } from 'uuid'
import { addTodo } from '../../api/todo'
import { getDate } from '../../util/timeago'
type Value = string | null
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
  const initData = {
    id: uuid(),
    category: '',
    title: '',
    date: getDate(date),
    start: '',
    end: '',
    status: 0,
    repeat: false,
    memo: '',
  }
  const queryClient = useQueryClient()
  const { isLoading, data, isError } = useQuery(
    ['todo', 'categories'],
    async () =>
      await readCategory().then((res) => {
        setTodo({
          ...todo,
          category: data ? data[0].id : '',
        })
        return res
      }),
    { staleTime: 1000 * 60 }
  )

  const [todo, setTodo] = useState(initData)
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

  const handleAdd = useMutation(
    async () => {
      await addTodo(
        !todo.category
          ? {
              ...todo,
              category: data ? data[0].id : '',
            }
          : todo
      )
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todo'])
        setTodo(initData)
      },
    }
  )

  return (
    <div className='w-fit border absolute top-0 rounded'>
      <Modal setOpen={setOpen} open={open}>
        <h3 className='text-gray'>ToDo 추가</h3>
        <hr />
        {isLoading && <span>loading ...</span>}
        {isError && <span>error ...</span>}
        {data && (
          <dd className='flex py-2'>
            📂
            <select
              className='outline-1 outline-offset-4 outline-[#a1a1a1] px-4 border hover:cursor-pointer rounded'
              name='category'
              onChange={handleChange}
            >
              {data?.map((category) => (
                <option
                  key={category.id}
                  className='outline-none text-white'
                  value={category.id}
                  style={{ background: category.color }}
                >
                  {category.name}
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
            onChange={(newValue) => {
              if (newValue)
                setTodo({ ...todo, start: newValue })
            }}
          />{' '}
          ~{' '}
          <TimePickerComponent
            value={todo.end}
            name='end'
            onChange={(newValue) => {
              if (newValue)
                setTodo({ ...todo, end: newValue })
            }}
          />
        </dd>
        <dd>
          <p>🗒️메모</p>
          <textarea
            rows={4}
            style={{ resize: 'none' }}
            className={`w-full p-2 text-sm rounded ${styles['bg-yellow']}`}
            name='memo'
            value={todo.memo}
            onChange={handleChange}
          />
        </dd>

        <div onClick={() => handleAdd.mutate()}>
          <Button classname='border'>추가</Button>
        </div>
      </Modal>
    </div>
  )
}
