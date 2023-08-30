import { Suspense } from 'react'
import Info from '../components/info/Info'
import PlayList from '../components/playlist/playlist'
import Spinner from '../components/common/Spinner'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/common/ErrorFallback'
import ErrorBoundaryContainer from '../components/common/ErrorBoundaryContainer'

export default function Home() {
  return (
    <section className='flex h-full  max-sm:flex-col'>
      <Info />
      <div className='w-3/5 h-max h-fit p-4 max-md:w-1/2  flex flex-col   gap-4 border-l-2  max-sm:w-full max-sm:border-l-0 max-sm:border-t-2'>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundaryContainer>
            <PlayList
              key='list'
              keyword='자기개발'
              searchKey='list'
            />
          </ErrorBoundaryContainer>
          <ErrorBoundaryContainer>
            <PlayList
              key='frontend'
              keyword='프론트엔드'
              searchKey='frontend'
            />
          </ErrorBoundaryContainer>
          <ErrorBoundaryContainer>
            <PlayList
              key='pilates'
              keyword='필라테스'
              searchKey='pilates'
            />
          </ErrorBoundaryContainer>
        </Suspense>
      </div>
    </section>
  )
}
