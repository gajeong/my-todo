import React, { ReactNode } from 'react'
import Header from './Header'
import styles from './Page.module.css'
import { children } from '../../types/common'
export default function Page({ children }: children) {
  return (
    <div className={`${styles.container} shadow-lg`}>
      <Header />
      {children}
    </div>
  )
}
