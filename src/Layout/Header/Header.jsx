import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeRandomColor, resetColor } from '../../store/colorSlice'
import { toggleTheme } from '../../store/themeSlice'
import classes from './Header.module.css'

const Header = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)
  const { totalSum } = useSelector((state) => state.cart)
  const { products } = useSelector((state) => state.cart)
  return (
    <header
      // className={theme === 'dark' ? classes.dark : ''}
      style={{
        color: theme === 'dark' ? '#ffffff' : '#000000',
        background: theme === 'dark' ? '#3c3a3a' : '#ffffff',
      }}
    >
      <h1>
        СУММА: {totalSum} Товары в корзине: {products.length}
      </h1>
      <button
        // диспатчим экшен
        onClick={() => dispatch(toggleTheme())}
        style={{
          color: theme === 'dark' ? '#ffffff' : '#000000',
          background: theme === 'dark' ? '#363232' : '#ffffff',
        }}
      >
        Change Theme
      </button>
      <button onClick={() => dispatch(changeRandomColor())}>Change Color</button>
      <button onClick={() => dispatch(resetColor())}>Reset Color</button>

      <nav>
        <ul>
          <li>
            <a href="/posts#6">6</a>
          </li>
          <li>
            <NavLink
              to="/"
              className={(state) => {
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? classes.active : ''
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? classes.active : ''
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? classes.active : ''
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? classes.active : ''
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
