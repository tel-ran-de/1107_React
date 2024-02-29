import classes from './ProductCard.module.css'

const ProductCard = ({ title, description, price, handleAddToCart }) => {
  return (
    <div className={classes.productContainer}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  )
}

export default ProductCard
