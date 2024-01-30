import './userList.module.css'

const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((el) => (
        <h1 key={el.id}>{el.firstName}</h1>
      ))}
    </div>
  )
}

export default UserList
