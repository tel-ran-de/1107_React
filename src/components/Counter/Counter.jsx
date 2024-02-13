import { useSelector } from 'react-redux'

const Counter = () => {
  // получаем доступ к нашему store
  // useSelector в качестве параметра принимает КОЛБЕК!!!
  const counter = useSelector((store) => store.counter)
  console.log(counter)
  return (
    <div>
      <h1>{counter}</h1>
      <button>+</button>
      <button>-</button>
      <button>reset</button>
    </div>
  )
}

export default Counter
