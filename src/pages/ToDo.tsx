import TodoList from '../components/todo/todolist'
import styles from './ToDo.module.css'
export default function ToDo() {
  return (
    <section className='h-full'>
      <h1 className='text-3xl text-center underline underline-offset-4 my-3'>
        Create a Life Full Of Values
      </h1>
      <TodoList />
    </section>
  )
}
