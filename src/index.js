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
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'

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
      {
        path: 'posts/create',
        element: <CreatePost />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
