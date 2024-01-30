import { useForm } from 'react-hook-form'

const AddUser1 = ({ handleAddUser }) => {
  const {
    register,
    // подписывается на инпут  и при сабмите формы данные отправляет в обработчик
    handleSubmit,
    formState: { errors },
    reset, // (обновляет) сбрасывает инпуты формы
  } = useForm()

  const handleUserSubmit = (data) => {
    handleAddUser(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(handleUserSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input
          id="firstName"
          type="text"
          {...register('firstName', { required: true, minLength: 4 })}
        />
      </label>
      <button type="submit">Add New User</button>
    </form>
  )
}

// export default AddUser

const AddUser = ({ handleAddUser }) => {
  const {
    register,
    // подписывается на инпут  и при сабмите формы данные отправляет в обработчик
    handleSubmit, //e.preventDefault()
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const handleUserSubmit = (data) => {
    handleAddUser(data)
    reset()
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleUserSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          id="firstName"
          {...register('firstName', { required: true, minLength: 4 })}
        />
      </label>
      <button type="submit">Add New User</button>
    </form>
  )
}

export default AddUser
