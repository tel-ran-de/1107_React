import { useGetAllProductsQuery } from '../../store/apiSlice'

const ProductList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetAllProductsQuery()

  return (
    <main>
      {isError ? <h1>{error.data.error}</h1> : null}
      {isSuccess ? 'Все успешно' : null}
      {isLoading ? 'ИДЕТ ЗАГРУЗКА ПРОДУКТОВ' : data?.map((el) => <h1 key={el.id}>{el.title}</h1>)}
    </main>
  )
}

export default ProductList
