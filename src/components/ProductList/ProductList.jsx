import { useGetAllProductsQuery } from '../../store/apiSlice'
import { FiltrationBar } from '../FiltrationBar/FiltrationBar'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetAllProductsQuery()

  return (
    <main>
      <FiltrationBar />
      {isError ? <h1>{error.data.error}</h1> : null}
      {isSuccess ? 'Все успешно' : null}
      {isLoading
        ? 'ИДЕТ ЗАГРУЗКА ПРОДУКТОВ'
        : data?.map((el) => <ProductCard key={el.id} {...el} />)}
    </main>
  )
}

export default ProductList
