import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, reset } from '../../store/counterSlice'

const Counter = () => {
  // получаем доступ к нашему store
  // useSelector в качестве параметра принимает КОЛБЕК!!!
  const counter = useSelector((store) => store.counter.counter)
  console.log(counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter
