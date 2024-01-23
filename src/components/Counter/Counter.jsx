import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // Реализовать счетчик/ кликер
  // импортировать useState
  // деструктурируем хук = две переменные для счетчика и изменения его
  // три кнопки - увеличивает на один, уменьшет на один и сбрасывает до 0 (reset)
  // counter - выводим на экран

  // ДВА ВАРИАНТА ВОЗМОЖНО
  // Если функция однострочная
  const handleMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  )
}

export default Counter
