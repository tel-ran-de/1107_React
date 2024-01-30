import { v4 as uuidv4 } from 'uuid'
import './userList.module.css'

const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((el) => (
        <h1 key={uuidv4()}>{el.firstName}</h1>
      ))}
    </div>
  )
}

export default UserList
