import { useForm } from 'react-hook-form'

const AddUser = ({ handleAddUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues, isSubmitSuccessful, isSubmitting, isValid },
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      firstName: 'AAAA',
      age: 22,
      email: '',
    },
  })

  const handleUserSubmit = (data) => {
    handleAddUser(data)
    reset()
  }
  // watch вызывает ререндирг
  //console.log(watch()) // ререндеринг на каждый ввод символа
  console.log(getValues()) // вызывается во время сабмита формы
  return (
    <form onSubmit={handleSubmit(handleUserSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input
          id="firstName"
          type="text"
          {...register('firstName', {
            required: true,
            minLength: { value: 4, message: 'Имя должно быть длинее 3 символов' },
            maxLength: { value: 10, message: 'Имя должно быть короче 10 символов' },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.firstName?.message}</p>
      <label htmlFor="age">
        Age
        <input
          id="age"
          type="number"
          {...register('age', {
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            min: { value: 18, message: 'Пользователь должен быть старше 18 лет' },
            max: { value: 120, message: 'Пользователь должен быть младше 120' },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.age?.message}</p>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Неправильно введен имейл, добавьте точку и домен',
            },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      {/* СОЗДАТЬ ИНПУТ ДЛЯ ТЕЛЕФОНА И ВАЛИДИРОВАТЬ НЕМЕЦКИЙ НОМЕР */}
      <label htmlFor="phone">
        Phone
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            pattern: {
              value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
              message: 'Введите пожалуйста немецкий номер',
            },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.phone?.message}</p>
      <label htmlFor="Password">
        Password
        <input
          id="Password"
          type="password"
          {...register('Password', {
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            minLength: { value: 4, message: 'Пароль должен быть не менее 4 символов' },
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.Password?.message}</p>
      <label htmlFor="Confirm-Password">
        Confirm Password
        <input
          id="Confirm-Password"
          type="password"
          {...register('ConfirmPassword', {
            required: 'ПОЛЕ ОБЯЗАТЕЛЬНО',
            validate: (value) => value === getValues('Password') || 'Вы должны подтвердить пароль',
          })}
        />
      </label>
      <p style={{ color: 'red' }}>{errors.ConfirmPassword?.message}</p>
      <button type="submit" disabled={isSubmitting}>
        Add New User
      </button>
      <p>{isSubmitSuccessful && 'СПАСИБО ВЫ ПРЕКРАСНЫ'}</p>
    </form>
  )
}

export default AddUser
