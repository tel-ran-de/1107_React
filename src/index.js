import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'
import { store } from './redux/store'
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
        path: '/users/:id',
        element: <SingleUserPage />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
