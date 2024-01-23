import React from 'react'
import './App.css'
import ChangeColor from './components/ChangeColor/ChangeColor'
import Counter from './components/Counter/Counter'
import PostList from './components/PostList/PostList'
import TodoList from './components/TodoList/TodoList'

export const App = () => {
  return (
    <>
      {/* <img src={dog} alt="" /> */}
      <Counter />
      <PostList />
      <TodoList />
      <ChangeColor />
    </>
  )
}

// export default App
