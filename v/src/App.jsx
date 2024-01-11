import './App.css'
import React from 'react'
import { AboutMe } from './components/AboutMe'
import A from './components/AboutMe'
// Компонент это функция JS кот возвращает
// ОДИН ТЕГ HTML
// все теги обернуты в одного родителя
// one parent element
// чтобы компонент что-то отрисовывал необходим RETURN
// Компонент называется с большой буквы
// безымянный тег - это фрагмент   <>

export const App = () => {
  return (
    <>
      <div className="App">Hello world</div>
      <h1>My name is Vlad</h1>

      <AboutMe />

      <Header />
      <Banner />
      <Main />

      <AboutMe />

      <A />
    </>
  )
}

// export default App

// дефолтный экспорт
// 1. Один на весь файл
// 2. Импортируется без фигруных скобок
// 3. можем переименовать при импорте

// обычный экспорт
// 1. Сколько угодно на странице
// 2. испортуется с фигурными скобками

// если один только экспорт из файла - дефолтный
// несколько - именнованные
