const ProductCard = ({ title, description, price, images }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={images && images[0]} alt={title} />
    </div>
  )
}

export default ProductCard
