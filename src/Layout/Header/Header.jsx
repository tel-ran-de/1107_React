import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="#6">6</NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(state) => {
                console.log(state)
                return state.isPending ? classes.pending : state.isActive ? classes.active : ''
              }}
            >
              Home
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
