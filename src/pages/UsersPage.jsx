import { useEffect, useState } from 'react'
import AddUser from '../components/AddUser/AddUser'
import UserList from '../components/UserList/UserList'
import { addUser, fetchUsers } from '../utils/requests'

const UsersPage = () => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    fetchUsers(setUserList)
  }, [])

  const handleAddUser = async (newUser) => {
    const userResponse = await addUser(newUser)
    setUserList([...userList, userResponse])
  }

  return (
    <main>
      <AddUser handleAddUser={handleAddUser} />
      <UserList userList={userList} />
    </main>
  )
}

export default UsersPage
