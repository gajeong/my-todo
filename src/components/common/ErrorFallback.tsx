import React from 'react'
import type { FallbackProps } from 'react-error-boundary'
export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div role='alert'>
      <p>Something went wrong : </p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>reset </button>
    </div>
  )
}
