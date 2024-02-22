// создать компонент  SingleProduct
// импортируем хук с переданным ПАРАМЕТРОМ
// получаем данные отрисовываем

import { useGetSingleProductQuery } from '../../store/apiSlice'

// обрабатываем случаи загрузки и ошибки
const SingleProduct = () => {
  const { data } = useGetSingleProductQuery(4)
  console.log(data)
  //   const { data: singleProduct } = useGetSingleProductQuery(4)
  //   console.log(singleProduct)
  return <div>{data?.title}</div>
}

export default SingleProduct
