export const fetchUsers = async (setUserList) => {
  try {
    const response = await fetch('https://dummyjson.com/users')
    if (!response.ok) throw new Error('не получилось забрать пользователей')
    const data = await response.json()
    setUserList(data.users)
  } catch (error) {
    console.log(error)
  }
}

export const fetchSingleUser = async (id, setUser) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  const data = await response.json()
  console.log(data)
  setUser(data)
}

// export async await
// body передаем объект - параметр функции
// результат/ответ вывводим в консоль
export const addUser = async (newUser) => {
  try {
    const response = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    if (!response.ok) throw new Error('не получилось добавить пользователя')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
