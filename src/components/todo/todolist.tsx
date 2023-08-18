import { useState } from 'react'
import TodoItem from './todoItem'
import { findAllByTestId } from '@testing-library/react'
import { useQuery } from 'react-query'
import { readTodo } from '../../api/todo'
import { getDate } from '../../util/timeago'

export default function TodoList({
  date,
  delStatus,
}: {
  date: Date
  delStatus: boolean
}) {
  const { isLoading, data, isError } = useQuery(
    ['todo', date],
    async () =>
      await readTodo(getDate(date)).then((res) => res),
    {
      staleTime: 1000 * 60,
    }
  )
  return (
    <section className='relative'>
      <main className='border h-fit rounded w-2/5 max-sm:w-full my-2 '>
        {data &&
          data?.map((list) => (
            <TodoItem
              date={date}
              data={list}
              key={list.id}
              delStatus={delStatus}
            />
          ))}
      </main>
    </section>
  )
}
