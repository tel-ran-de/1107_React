import { useEffect, useState } from 'react'
import { fetchSingleUser } from '../../utils/requests'

const UserList = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchSingleUser(1, setUser)
  }, [])

  return <div>{user.firstName}</div>
}

export default UserList
