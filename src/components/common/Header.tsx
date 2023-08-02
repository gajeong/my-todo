import { useState } from 'react'

export default function Header() {
  const [user, setUser] = useState('7rgoong')
  return <header>{user}</header>
}
