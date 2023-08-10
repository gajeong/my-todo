import { useState } from 'react'
import { useQuery } from 'react-query'
import { fetchColor } from '../../api/color'
import Modal from '../common/Modal'

export default function ColorPalette() {
  const [open, setOpen] = useState(true)
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

  return (
    <div>
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
    </div>
  )
}
