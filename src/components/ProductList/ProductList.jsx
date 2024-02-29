import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFiltration } from '../../customHooks/useFiltration'
import { useGetAllProductsQuery } from '../../store/apiSlice'
import { addProduct, countTotalSum } from '../../store/cartSlice'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery()
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter)
  const products = useFiltration(data, minPrice, maxPrice, sorted)
  const dispatch = useDispatch()

  // добавить диспатч для подсчета суммы
  const handleAddToCart = (event, product) => {
    event.preventDefault()
    dispatch(addProduct(product))
    dispatch(countTotalSum())
  }

  return (
    <main>
      {isError ? <h1>{error.data.error}</h1> : null}
      {isLoading
        ? 'ИДЕТ ЗАГРУЗКА ПРОДУКТОВ'
        : products?.map((el) => (
            <Link key={el.id} to={`/products/${el.id}`}>
              <ProductCard {...el} handleAddToCart={(event) => handleAddToCart(event, el)} />
            </Link>
          ))}
    </main>
  )
}

export default ProductList
