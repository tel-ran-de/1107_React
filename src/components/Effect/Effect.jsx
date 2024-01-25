import { useEffect, useState } from 'react'
import { changeColor } from '../../utils/changeColor'

const Effect = () => {
  const [count, setCount] = useState(+localStorage.getItem('count'))
  // + перед строкой/Number(count)/parseInt(count)
  const [color, setColor] = useState(changeColor())

  useEffect(() => {
    // setItem
    localStorage.setItem('count', count)
  }, [count])

  return (
    <div style={{ background: color }}>
      Effect
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setColor(changeColor())}>change color</button>
    </div>
  )
}

export default Effect
