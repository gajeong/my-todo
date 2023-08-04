import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './pages/Home'
import Page from './components/common/Page'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App h-screen'>
        <Page>
          <RouterProvider router={router}></RouterProvider>
        </Page>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
