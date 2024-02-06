import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
// createBrowserRouter - позволяет создать систему перходов и страниц,
// описываем логику перехода между старницами
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import UsersPage from './pages/UsersPage'

// RouterProvider - специальный компонент,
//  кот оборачивает наше приложение и обеспеч доступ к созданному router
const router = createBrowserRouter([
  {
    path: '/', // домашняя страница
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// router - специальный интсрумент, кот обеспечивает доступом компоненты/элементы нашего приложенияы
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
