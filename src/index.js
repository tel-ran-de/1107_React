import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { App } from './App'
import './index.css'
import CartPage from './pages/CartPage'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import ProductsPage from './pages/ProductsPage'
import SingleProductPage from './pages/SingleProductPage'
import SingleUserPage from './pages/SingleUserPage'
import UsersPage from './pages/UsersPage'
import { persistor, store } from './store/store'
// RouterProvider - специальный компонент,
//  кот оборачивает наше приложение и обеспеч доступ к созданному router

const router = createBrowserRouter([
  {
    path: '/', // домашняя страница
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />,
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
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

// router - специальный интсрумент, кот обеспечивает доступом компоненты/элементы нашего приложенияы
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
