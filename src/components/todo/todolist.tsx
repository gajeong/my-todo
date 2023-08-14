import { useState } from 'react'
import TodoItem from './todoItem'
import { findAllByTestId } from '@testing-library/react'

export default function TodoList({ date }: { date: Date }) {
  const data = [
    {
      id: '81',
      category: '공부',
      title: '모던 자바스크립트 읽기',
      date: new Date(),
      start: '16:00',
      end: '18:00',
      status: 0,
      repeat: true,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: '8',
      category: '공부',
      title: '모던 자바스크립트 읽기',
      date: new Date(),
      start: '16:00',
      end: '18:00',
      status: 1,
      repeat: true,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: '35',
      category: '업무',
      title: '모던 자바스크립트 읽기',
      date: new Date(),
      start: '16:00',
      end: '18:00',
      status: 0,
      repeat: false,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: '99',
      category: '여가',
      title: '운동',
      date: new Date(),
      start: '16:00',
      end: '18:00',
      status: 1,
      repeat: true,
      memo: '18강 프로시저 까지 읽음',
    },
  ]
  return (
    <section className='relative'>
      <main className='border h-fit rounded w-2/5 max-sm:w-full my-2 '>
        {data.map((list) => (
          <TodoItem data={list} key={list.id} />
        ))}
      </main>
    </section>
  )
}
