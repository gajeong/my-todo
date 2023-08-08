import { ReactNode } from 'react'
import styles from './Button.module.css'
type Props = {
  children: ReactNode
  classname?: string
}
export default function Button({
  children,
  classname,
}: Props) {
  return (
    <div className={`${styles.btn} ${classname}`}>
      {children}
    </div>
  )
}
