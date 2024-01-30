import { useState } from 'react'

const AddUser = ({ handleAddUser }) => {
  const [firstName, setFirstName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = { firstName } // firstName: firstName
    handleAddUser(newUser)
    setFirstName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        First Name
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <button type="submit">Add New User</button>
    </form>
  )
}

export default AddUser
