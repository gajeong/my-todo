import React from 'react'
import TodoItem from './todoItem'

export default function TodoList() {
  const data = [
    {
      id: 81,
      category: '공부',
      title: '모던 자바스크립트 읽기',
      start: '16:00',
      end: '18:00',
      status: 0,
      repeat: 0,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: 8,
      category: '공부',
      title: '모던 자바스크립트 읽기',
      start: '16:00',
      end: '18:00',
      status: 1,
      repeat: 0,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: 35,
      category: '업무',
      title: '모던 자바스크립트 읽기',
      start: '16:00',
      end: '18:00',
      status: 0,
      repeat: 0,
      memo: '18강 프로시저 까지 읽음',
    },
    {
      id: 99,
      category: '여가',
      title: '운동',
      start: '16:00',
      end: '18:00',
      status: 1,
      repeat: 0,
      memo: '18강 프로시저 까지 읽음',
    },
  ]
  return (
    <main className='border rounded w-2/5 max-sm:w-full '>
      {data.map((list) => (
        <TodoItem data={list} key={list.id} />
      ))}
    </main>
  )
}
