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
fetch('https://dummyjson.com/users/1')
  .then((res) => res.json())
  .then(console.log)
// написать компонент SingleUser
// в нем через useEffect вызвать функцию данные присвоить в состояние
// и отрисовать на странице
