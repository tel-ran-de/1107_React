import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.escuelajs.co/api/v1/' }),
  tagTypes: ['Products', 'Users'], // все возможные теги
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery, useAddNewProductMutation } =
  apiSlice
