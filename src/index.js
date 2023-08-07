import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ToDo from './pages/ToDo'
import Page from './components/common/Page'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todo',
        element: <ToDo />,
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
