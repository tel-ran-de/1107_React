import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, increase_by_value, reset } from '../../redux/actionCreators'

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
      <button onClick={() => dispatch(increase_by_value(5))}>Add 5</button>
    </div>
  )
}

export default Counter
