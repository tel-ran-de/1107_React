const ProductInCart = ({
  title,
  price,
  quantity,
  handleAddToCart,
  handleDeleteFromCart,
  handleDecreaseProduct,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <button onClick={handleDecreaseProduct}>-</button>
      {quantity}
      <button onClick={handleAddToCart}>+</button>
      <button onClick={handleDeleteFromCart}>X</button>
    </div>
  )
}

export default ProductInCart
