import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import { useGetSingleProductQuery } from '../store/apiSlice'
import { addProduct, countTotalSum } from '../store/cartSlice'

const SingleProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, isLoading } = useGetSingleProductQuery(id)

  const handleAddToCart = (data) => {
    dispatch(addProduct(data))
    dispatch(countTotalSum())
  }

  return (
    <main>
      {isLoading ? (
        <h1>ЗАГРУЗКА</h1>
      ) : (
        <ProductCard {...data} handleAddToCart={() => handleAddToCart(data)} />
      )}
    </main>
  )
}

export default SingleProductPage
