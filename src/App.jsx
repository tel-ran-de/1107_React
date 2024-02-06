import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header/Header'

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
