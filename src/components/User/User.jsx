import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts'
import { fetchSingleUser } from '../../utils/requests'

const User = () => {
  const { theme } = useContext(ThemeContext)
  const [user, setUser] = useState({})
  console.log(theme)
  useEffect(() => {
    fetchSingleUser(1, setUser)
  }, [])

  return (
    <div
      style={{
        color: theme === 'dark' ? '#ffffff' : '#000000',
        background: theme === 'dark' ? '#3c3a3a' : '#ffffff',
      }}
    >
      {user.firstName}
    </div>
  )
}

export default User
