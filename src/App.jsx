import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header/Header'
import { ThemeContext } from './contexts'

// Обернуть это все в провайдер
export const App = () => {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    // если тема темная то поменяй на светлую, если нет то сделай темную
    // if theme dark return light if not return dark
    // setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    console.log('CHANGE')
    setTheme(theme === 'dark' ? 'light' : 'dark')
    // setTheme('light')
  }

  // передать значение темы в провайдер
  // передаем  функцию изменения в провайдер в Header
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Outlet />
      </ThemeContext.Provider>
    </>
  )
}
