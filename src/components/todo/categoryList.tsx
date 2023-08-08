import Modal from '../common/Modal'

import Button from '../common/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import { useState, ChangeEvent } from 'react'
import { v4 as uuid } from 'uuid'
import { writeCategory } from '../../api/category'

export default function CategoryList({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (state: boolean) => void
}) {
  const data = [
    { id: 'sfef', name: '공부', color: '#9ED2BE' },
    { id: '222', name: '업무', color: '#9E9FA5' },
    { id: 'sfeg', name: '여가', color: '#FFC6AC' },
  ]

  const [categories, setCategories] = useState(data)
  const addList = () => {
    const item = { id: uuid(), name: '', color: '#fff' }
    setCategories([...categories, item])
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {}

  return (
    <div className='absolute w-[250px] right-[10px] top-[10px]'>
      <Modal open={open} setOpen={setOpen}>
        {categories.map((category) => (
          <li
            className='flex items-center justify-between py-1'
            key={category.id}
          >
            <div className='flex items-center'>
              <p
                style={{ background: category.color }}
                className={`w-[15px] h-[15px] rounded ${
                  category.color === '#fff' ? 'border' : ''
                }`}
              ></p>
              <p className='px-2'>
                {category.name ? (
                  category.name
                ) : (
                  <input
                    onBlur={() => writeCategory(category)}
                  />
                )}
              </p>
            </div>
            <AiOutlineDelete fill='#aaa' />
          </li>
        ))}
        <Button classname='border rounded'>
          <li
            className='cursor-pointer px-4'
            onClick={addList}
          >
            추가하기
          </li>
        </Button>
      </Modal>
    </div>
  )
}
