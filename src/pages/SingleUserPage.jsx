import { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ThemeContext } from '../contexts'
import { fetchSingleUser } from '../utils/requests'

const SingleUserPage = () => {
  const [user, setUser] = useState({})
  const { theme } = useContext(ThemeContext)
  const { id } = useParams()
  //   const state = useNavigation()
  //   console.log(state)
  const { state } = useLocation()

  useEffect(() => {
    fetchSingleUser(id, setUser)
  }, [id])

  return (
    <main
      style={{
        color: theme === 'dark' ? '#ffffff' : '#000000',
        background: theme === 'dark' ? '#3c3a3a' : '#ffffff',
      }}
    >
      <h1>{user.firstName}</h1>
      <img src={user.image} alt="" />
    </main>
  )
}

export default SingleUserPage
