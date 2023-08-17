import { useState } from 'react'
import TodoItem from './todoItem'
import { findAllByTestId } from '@testing-library/react'
import { useQuery } from 'react-query'
import { readTodo } from '../../api/todo'
import { getDate } from '../../util/timeago'

export default function TodoList({ date }: { date: Date }) {
  const { isLoading, data, isError } = useQuery(
    ['todo'],
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
            <TodoItem data={list} key={list.id} />
          ))}
      </main>
    </section>
  )
}
