import React from 'react'
import './App.css'
import Post from './components/Post/Post'
import { Todo } from './components/Todo/Todo'

export const App = () => {
  const firstPost = {
    title: 'First Post',
    description: 'lorem lorem',
    marked: true,
    image: 'https://via.placeholder.com/600/92c952',
  }

  return (
    <>
      <div className="App">Hello world</div>
      <Post title={firstPost.title} description={firstPost.description} marked={firstPost.marked} />
      {/* 15 строчка и 17 идентичны */}
      {/* работает в том случае когда props называется также как и ключ объекта */}
      <Post {...firstPost} />
      <Todo taskTitle="title" taskDescripttion="desc" doneFlg={true} />
    </>
  )
}

// export default App
