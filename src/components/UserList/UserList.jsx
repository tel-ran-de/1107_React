import { useEffect, useState } from 'react'
import { fetchUsers } from '../../utils/requests'
import './userList.module.css'

const UserList = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetchUsers(setUserList)
  }, [])

  return (
    <div>
      {userList.map((el) => (
        <h1 key={el.id}>{el.firstName}</h1>
      ))}
    </div>
  )
}

export default UserList
