import { useEffect, useState, useRef } from 'react'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { fetchColor } from '../../api/color'
import Modal from '../common/Modal'
import { Category } from '../../types/category'
import { addCategory } from '../../api/category'

type Props = {
  open: boolean
  setOpen: (state: boolean) => void
  position?: number[]
  classnames?: string
  enterData: Category
}
export default function ColorPalette({
  open,
  setOpen,
  position,
  classnames,
  enterData,
}: Props) {
  const queryClient = useQueryClient()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const {
    isLoading,
    data: colors,
    error,
  } = useQuery(
    ['palette'],
    async () => await fetchColor().then((res) => res),
    { staleTime: 1000 * 60 * 24 }
  )
  const changeCategory = useMutation(
    (data: Category) => addCategory(data),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(['categories']),
    }
  )

  const changeColor = async (color: string) => {
    const data = { ...enterData, color: color }
    await changeCategory.mutate(data, {
      onSuccess: () => {
        setOpen(false)
      },
    })
  }

  const [height, setHeight] = useState(0)
  useEffect(() => {
    if (componentRef.current)
      position &&
        setHeight(
          position[1] -
            componentRef.current.clientHeight +
            10
        )
  }, [position])
  return (
    <div
      ref={componentRef}
      className={`${classnames}`}
      style={{ top: height }}
    >
      {open && (
        <Modal setOpen={setOpen} open={open}>
          <div className='grid grid-cols-5 gap-2'>
            {colors?.map((color, idx) => (
              <li
                key={idx}
                className={`w-[20px] h-[20px] rounded-sm cursor-pointer hover:brightness-90`}
                style={{ background: color }}
                onClick={() => changeColor(color)}
              ></li>
            ))}
          </div>
        </Modal>
      )}
    </div>
  )
}
