import AddNewProducts from '../components/AddNewProduct/AddNewProduct'
import { FiltrationBar } from '../components/FiltrationBar/FiltrationBar'
import ProductList from '../components/ProductList/ProductList'

const ProductsPage = () => {
  return (
    <main>
      <AddNewProducts />
      <FiltrationBar />
      <ProductList />
    </main>
  )
}

export default ProductsPage
