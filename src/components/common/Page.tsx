import Header from './Header'
import styles from './Page.module.css'
import { children } from '../../types/common'
export default function Page({ children }: children) {
  return (
    <main
      className={`${styles.container} h-full shadow-md`}
    >
      <Header />
      <div className={`${styles.scroll} h-full`}>
        <main className='h-full'>{children}</main>
      </div>
    </main>
  )
}
