import { useState } from 'react'
import { changeColor } from '../../utils/changeColor'

function ChangeColor() {
  // значением состояния может быть любой тип данных
  // примитив или ссылочный тип данных
  const [color, setColor] = useState(changeColor()) // () - defaultValue - дефолтное значение

  return (
    <div>
      <h1 style={{ color: color }}>ЭТОТ КОМПОНЕТ МЕНЯЕТ ЦВЕТ</h1>
      <button onClick={() => setColor(changeColor())}>поменяй цвет</button>
    </div>
  )
}

export default ChangeColor

// деструткуризация
// const arr1 = ['a', console.log('a')]
// const [value, setValue] = arr1
