import { useState } from 'react'
import { useAddNewProductMutation } from '../../store/apiSlice'

const AddNewProducts = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const [addNewProduct, { isError, isLoading, isSuccess }] = useAddNewProductMutation()

  const handleSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      title,
      price,
      description: 'A description',
      categoryId: 1,
      images: ['https://placeimg.com/640/480/any'],
    }

    addNewProduct(newProduct)

    setPrice('')
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label htmlFor="price">
        Text
        <input
          id="price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <button type="submit">Add new post</button>
    </form>
  )
}

export default AddNewProducts
