import { useEffect, useState } from 'react'
import { fetchSingleUser } from '../../utils/requests'

const User = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetchSingleUser(1, setUser)
  }, [])

  return <div>{user.firstName}</div>
}

export default User
