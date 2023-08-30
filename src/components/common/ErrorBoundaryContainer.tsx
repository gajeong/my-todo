import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

interface Props {
  onError?: (error: Error) => void
  onReset?: () => void
}

export default function ErrorBoundaryContainer({
  children,
  onError,
  onReset,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  )
}
