import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import './userList.module.css'

const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((el) => (
        <Link to={`/users/${el.id}`} state={{ firstName: el.firstName }} key={uuidv4()}>
          <h1>{el.firstName}</h1>
        </Link>
      ))}
    </div>
  )
}

export default UserList
