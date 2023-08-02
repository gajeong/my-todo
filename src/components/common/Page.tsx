import React, { ReactNode } from 'react'
import Header from './Header'

export default function Page({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
