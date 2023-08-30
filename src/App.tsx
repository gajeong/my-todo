import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Page from './components/common/Page'
import { Outlet } from 'react-router-dom'
import { QueryErrorResetBoundary } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})
function App() {
  return (
    <Page>
      <QueryErrorResetBoundary>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </QueryErrorResetBoundary>
    </Page>
  )
}

export default App
