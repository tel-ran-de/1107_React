import React from 'react'
import './App.css'
import PostList from './components/PostList/PostList'
import TodoList from './components/TodoList/TodoList'

export const App = () => {
  return (
    <>
      <PostList />
      <TodoList />
    </>
  )
}
