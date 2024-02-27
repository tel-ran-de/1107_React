import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../../store/apiSlice'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery()
  const [products, setProducts] = useState(data)
  const { minPrice, maxPrice, sorted } = useSelector((store) => store.filter)

  useEffect(() => {
    // filter - мы создаем новый массив кот отсеивать данные по двум параметрам верхний и нижний порог
    const filteredProducts = data?.filter((product) => {
      return (
        (!minPrice || product.price >= Number(minPrice)) &&
        (!maxPrice || product.price <= Number(maxPrice))
      )
    })

    const sortedProducts =
      sorted === '' || sorted === 'by Default'
        ? filteredProducts
        : filteredProducts?.toSorted((a, b) =>
            sorted === 'asc' ? a.price - b.price : b.price - a.price
          )

    setProducts(sortedProducts)
  }, [data, minPrice, maxPrice, sorted])

  return (
    <main>
      {isError ? <h1>{error.data.error}</h1> : null}
      {isLoading
        ? 'ИДЕТ ЗАГРУЗКА ПРОДУКТОВ'
        : products?.map((el) => <ProductCard key={el.id} {...el} />)}
    </main>
  )
}

export default ProductList
