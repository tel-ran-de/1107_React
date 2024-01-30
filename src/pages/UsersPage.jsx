import { useEffect, useState } from 'react'
import AddUser from '../components/AddUser/AddUser'
import UserList from '../components/UserList/UserList'
import { fetchUsers } from '../utils/requests'

const UsersPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetchUsers(setUserList)
  }, [])
  return (
    <main>
      <AddUser />
      <UserList userList={userList} />
    </main>
  )
}

export default UsersPage
