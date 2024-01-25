// создаем асинхронную функцию fetchUsers
// async await
// возвращает ответ от сервера
// try catch для обработки ошибок
// экспортировать
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

// написать функци по аналогии с предыдущей
// принимает параметр id
// fucntion expression
export const fetchSingleUser = async (id, setUser) => {
  const response = await fetch(`https://dummyjson.com/users/${id}`)
  const data = await response.json()
  console.log(data)
  setUser(data)
}

// написать компонент SingleUser
// в нем через useEffect вызвать функцию данные присвоить в состояние
// и отрисовать на странице
