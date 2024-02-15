import { ADD_POST, DELETE_POST, TOGGLE_POST } from './constants'

// реализовать логику редьюсера
const initialState = [
  {
    id: 1,
    title: 'Post 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'https://placehold.co/200x200/orange/white',
    marked: true,
  },
  {
    id: 2,
    title: 'Post 2',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    img: 'https://placehold.co/200x200/orange/white',
    marked: false,
  },
]

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload]
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload)
    case TOGGLE_POST:
      return state.map((post) =>
        post.id === action.payload ? { ...post, marked: !post.marked } : post
      )
    default:
      return state
  }
}
