import { useDispatch, useSelector } from 'react-redux'
import ProductInCart from '../components/ProductInCart/ProductInCart'
import {
  addProduct,
  clearCart,
  countTotalSum,
  decreaseProduct,
  deleteProduct,
} from '../store/cartSlice'

const CartPage = () => {
  const { products } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addProduct(product))
    dispatch(countTotalSum())
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    dispatch(countTotalSum())
  }

  const handleDeleteFromCart = (product) => {
    dispatch(deleteProduct(product))
    dispatch(countTotalSum())
  }
  const handleDecreaseProduct = (product) => {
    dispatch(decreaseProduct(product))
    dispatch(countTotalSum())
  }

  return (
    <main>
      <button onClick={handleClearCart}>Отправить заказ</button>
      {products.length === 0
        ? 'Корзина пуста'
        : products.map((product) => (
            <ProductInCart
              key={product.id}
              {...product}
              handleAddToCart={() => handleAddToCart(product)}
              handleDeleteFromCart={() => handleDeleteFromCart(product)}
              handleDecreaseProduct={() => handleDecreaseProduct(product)}
            />
          ))}
    </main>
  )
}

export default CartPage
