import { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchColor } from '../../api/color'
import Modal from '../common/Modal'

type Props = {
  open: boolean
  setOpen: (state: boolean) => void
  position?: number[]
  classnames?: string
}
export default function ColorPalette({
  open,
  setOpen,
  position,
  classnames,
}: Props) {
  const {
    isLoading,
    data: colors,
    error,
  } = useQuery(
    ['palette'],
    async () =>
      await fetchColor().then((res) => {
        console.log(res)
        return res
      }),
    { staleTime: 1000 * 60 * 24 }
  )
  const res = `left-[${position && position[0]}px] top-[${
    position && position[1]
  }px]`
  return (
    <div className={`${classnames} ${res}`}>
      {open && (
        <Modal setOpen={setOpen} open={open}>
          <div className='grid grid-cols-5 gap-2'>
            {colors?.map((color, idx) => (
              <li
                key={idx}
                className={`w-[20px] h-[20px] rounded-sm cursor-pointer`}
                style={{ background: color }}
              ></li>
            ))}
          </div>
        </Modal>
      )}
    </div>
  )
}
