import { useState, CSSProperties } from 'react'
import { PuffLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '200px auto',
}

export default function Spinner() {
  const [loading, setLoading] = useState(true)
  const color = '#333'

  return (
    <PuffLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={30}
    />
  )
}
