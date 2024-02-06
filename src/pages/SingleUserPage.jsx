import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { fetchSingleUser } from '../utils/requests'

const SingleUserPage = () => {
  const [user, setUser] = useState({})

  const { id } = useParams()
  //   const state = useNavigation()
  //   console.log(state)
  const { state } = useLocation()
  console.log(state.firstName)

  useEffect(() => {
    fetchSingleUser(id, setUser)
  }, [id])

  return (
    <main>
      <h1>{user.firstName}</h1>
      <img src={user.image} alt="" />
    </main>
  )
}

export default SingleUserPage
