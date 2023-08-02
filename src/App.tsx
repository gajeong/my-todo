import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Page from './components/common/Page'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
function App() {
  return (
    <div className='App h-screen'>
      <Page>
        <RouterProvider router={router}></RouterProvider>
      </Page>
    </div>
  )
}

export default App
