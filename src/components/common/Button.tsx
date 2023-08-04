import { children } from '../../types/common'
import styles from './Button.module.css'
export default function Button({ children }: children) {
  return <div className={styles.btn}>{children}</div>
}
