import { useState } from 'react'
import { Todo } from '../../types/todo'
import {
  BiChevronDown,
  BiChevronUp,
  BiMinus,
} from 'react-icons/bi'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md'
import styles from './todoItem.module.css'
import { readCategory } from '../../api/category'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { todo } from 'node:test'
import { addTodo, delTodo } from '../../api/todo'
import Button from '../common/Button'
import { getDate } from '../../util/timeago'
type Props = {
  date: Date
  data: Todo
  delStatus: boolean
}
export default function TodoItem({
  date,
  data,
  delStatus,
}: Props) {
  const {
    id,
    category,
    title,
    start,
    end,
    status,
    repeat,
    memo,
  } = { ...data }
  const queryClient = useQueryClient()

  const [open, setOpen] = useState(false)

  const {
    isLoading,
    data: categories,
    isError,
  } = useQuery(
    ['categories', 'read'],
    async () => await readCategory().then((res) => res),
    {
      staleTime: 1000 * 60,
    }
  )
  const categoryColor = categories?.find(
    (item) => item.id === category
  )

  const handleStatusChange = useMutation(
    async () => {
      await addTodo({
        ...data,
        status: status === 1 ? 0 : 1,
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todo'])
      },
    }
  )

  const handleDelete = useMutation(
    async () => await delTodo(getDate(date), id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['todo'])
      },
      onError: () => {
        console.log('err')
      },
    }
  )

  return (
    <section>
      {categoryColor && (
        <ol className={`p-2 ${styles.container}`}>
          <div className='flex items-center '>
            {delStatus && (
              <div onClick={() => handleDelete.mutate()}>
                <Button classname='border-2 rounded-lg mr-1 cursor-pointer'>
                  <BiMinus fill='#ccc' />
                </Button>
              </div>
            )}
            <li
              className={`text-sm py-0 px-2 text rounded flex-none text-white leading-5`}
              style={{
                background: categoryColor.color,
              }}
            >
              {categoryColor.name}
            </li>
            <li className='ml-2 flex-auto'>{title}</li>
            {(memo || start) &&
              (open === true ? (
                <BiChevronDown
                  fill='#ccc'
                  onClick={() => setOpen((prev) => !prev)}
                />
              ) : (
                <BiChevronUp
                  fill='#ccc'
                  onClick={() => setOpen((prev) => !prev)}
                />
              ))}
            <li className='px-2'>
              {status ? (
                <MdCheckBox
                  fill={categoryColor.color}
                  onClick={() =>
                    handleStatusChange.mutate()
                  }
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  fill='#bbb'
                  onClick={() =>
                    handleStatusChange.mutate()
                  }
                />
              )}
            </li>
          </div>
          {open && (
            <div>
              {start && (
                <li>
                  <span className='text-sm mr-2'>
                    ⏰ 시간
                  </span>{' '}
                  {start} ~ {end}
                </li>
              )}
              {memo && (
                <li>
                  <p className='text-sm'>🗒️ 메모</p>
                  <div
                    className={`p-2 ${styles['bg-yellow']} rounded`}
                  >
                    {memo}
                  </div>
                </li>
              )}
            </div>
          )}
        </ol>
      )}
    </section>
  )
}
