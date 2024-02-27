import { useDispatch } from 'react-redux'
import { maxPriceChange, minPriceChange, sortedChange } from '../../store/filterSlice'

export const FiltrationBar = () => {
  const dispatch = useDispatch()

  return (
    <form>
      <label htmlFor="minPrice">
        minPrice
        <input
          type="number"
          id="minPrice"
          onChange={(event) => dispatch(minPriceChange(event.target.value))}
        />
      </label>
      <label htmlFor="maxPrice">
        maxPrice
        <input
          type="number"
          id="maxPrice"
          onChange={(event) => dispatch(maxPriceChange(event.target.value))}
        />
      </label>
      <select id="sort" onChange={(event) => dispatch(sortedChange(event.target.value))}>
        <option>By default</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </form>
  )
}
