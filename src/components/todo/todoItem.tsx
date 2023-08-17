import { useState } from 'react'
import { Todo } from '../../types/todo'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
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
import { addTodo } from '../../api/todo'
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

  return (
    <section>
      {categoryColor && (
        <ol className={`p-2 ${styles.container}`}>
          <div className='flex items-center '>
            <li
              className={`text-sm py-0 px-2 text rounded flex-none text-white leading-5`}
              style={{
                background: categoryColor.color,
              }}
            >
              {categoryColor.name}
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
              <li>
                <span className='text-sm mr-2'>
                  ⏰ 시간
                </span>{' '}
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
      )}
    </section>
  )
}
