import { ReactNode } from 'react'
import { children } from '../../types/common'
interface Props {
  children: ReactNode
  position?: [number, number]
  open: boolean
  setOpen: (state: boolean) => void
}
export default function Modal({
  children,
  position,
  open,
  setOpen,
}: Props) {
  return (
    <section>
      {open && (
        <div>
          <div className='relative shadow-lg p-4 z-20'>
            {children}
          </div>
          <div
            className='fixed top-0 right-0 w-full h-full z-10'
            onClick={() => setOpen(false)}
          ></div>
        </div>
      )}
    </section>
  )
}
