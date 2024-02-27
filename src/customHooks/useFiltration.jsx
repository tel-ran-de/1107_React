import { useEffect, useState } from 'react'

export const useFiltration = (data, minPrice, maxPrice, sorted) => {
  const [products, setProducts] = useState(data)

  useEffect(() => {
    const filterProducts = () => {
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
    }
    const timerId = setTimeout(filterProducts, 300)
    return () => clearTimeout(timerId)
  }, [data, minPrice, maxPrice, sorted])

  return products
}
