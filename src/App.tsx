import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Page from './components/common/Page'
import { Outlet } from 'react-router-dom'

const queryClient = new QueryClient()
function App() {
  return (
    <Page>
      <QueryClientProvider client={queryClient}>
        <Outlet />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </Page>
  )
}

export default App
