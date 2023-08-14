import { ReactNode } from 'react'
import { children } from '../../types/common'
interface Props {
  children: ReactNode
  position?: [number, number]
  classname?: string
  open: boolean
  setOpen: (state: boolean) => void
}
export default function Modal({
  children,
  position,
  open,
  classname,
  setOpen,
}: Props) {
  return (
    <section>
      {open && (
        <div>
          <div
            className={`bg-white ${classname} relative shadow-lg p-4 z-20`}
          >
            {children}
          </div>
          <div
            className='fixed top-0 right-0 w-full h-full z-10 backdrop-blur-sm'
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}
    </section>
  )
}
