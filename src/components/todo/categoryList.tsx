import Modal from '../common/Modal'

import Button from '../common/Button'
import { AiOutlineDelete } from 'react-icons/ai'
export default function CategoryList({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (state: boolean) => void
}) {
  const color = [
    { id: 87, name: '공부', color: '#9ED2BE' },
    { id: 6, name: '업무', color: '#9E9FA5' },
    { id: 73, name: '여가', color: '#FFC6AC' },
  ]

  return (
    <div className='absolute right-[10px] top-[10px]'>
      <Modal open={open} setOpen={setOpen}>
        {color.map((category) => (
          <li
            className='flex items-center justify-between py-1'
            key={category.id}
          >
            <div className='flex items-center'>
              <p
                style={{ background: category.color }}
                className='w-[15px] h-[15px] rounded'
              ></p>
              <p className='px-2'>{category.name}</p>
            </div>
            <AiOutlineDelete fill='#aaa' />
          </li>
        ))}
        <Button classname='border rounded'>
          <li className='cursor-pointer px-4'>추가하기</li>
        </Button>
      </Modal>
    </div>
  )
}
