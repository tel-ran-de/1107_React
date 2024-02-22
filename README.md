// Компонент это функция JS кот возвращает
// ОДИН ТЕГ HTML
// все теги обернуты в одного родителя
// one parent element
// чтобы компонент что-то отрисовывал необходим RETURN
// Компонент называется с большой буквы
// безымянный тег - это фрагмент <>

// дефолтный экспорт
// 1. Один на весь файл
// 2. Импортируется без фигруных скобок
// 3. можем переименовать при импорте

// обычный экспорт
// 1. Сколько угодно на странице
// 2. испортуется с фигурными скобками

// если один только экспорт из файла - дефолтный
// несколько - именнованные

// компоненты между собой передают информацию в пропсах
// properties - какие-то свойства
// props это объект

// const title = props.title
// const description = props.description
// const { title, description } = props

Создать компонент Todo.
Внутри него должны быть переменные taskTitle, taskDescripttion, doneFlg
со значениями заголовка дела, описания и булевого значения сделано дело или нет. Отобразите taskTitle и taskDescripttion
и если doneFlg равно true, то заголовок и текст должны стать серого цвета и быть зачеркнутыми.
textDecoration: 'line-through'

// const { title, description, image } = props сразу в параметрах функции

// Примеры того как работают пропс
export const sum = (props) => {
return props.a + props.b
}

sum({ a: 4, b: 5 })

// export class PostComponent {
// constructor(props) {
// this.title = props.title
// }
// }

 <Post title={firstPost.title} description={firstPost.description} marked={firstPost.marked} />
      {/* 15 строчка и 17 идентичны */}
      {/* работает в том случае когда props называется также как и ключ объекта */}
      <Post {...firstPost} />

function ChangeColor() {
// color - мы будем менять цвет
// название функции set + название перменной с большой буквы [todos, setTodos] [user, setUser] [active, setActive]

// Правила хуков
// 1. Используем внутри компонента - внутри кастомных хуков
// 2. Хуки вызываются на верхнем уровне компонента
// 3. Нельзя использовать внутри циклов и условных операторов
const [color, setColor] = useState('orange') // () - defaultValue - дефолтное значение
// value - переменная в которой хранится наше состояние
// setValue - функция СПЕЦИАЛЬНАЯ которая изменяет наше состояние
// value = 'black' - так делать нельзя
// если мы хотим поменять значение переменной value
// вызываем функцию setValue с новым значением
// setValue('white')
// МЕНЯТЬ НА ПРЯМУЮ НЕЛЬЗЯ - не будет работать
console.log(color, setColor)
return <div>{color}</div>
}

ДЗ первое (простое)
Создать SPA приложение, которое отображает одну рандомную цитату (при нажатии на кнопку)

1. Создать коппонент
2. импортировать цитаты из файла
3. добавить их в состояние
4. создатиь функцию, которая будет выбирать рандомную цитату
5. занести ее в состояние
6. отобржать цитату на странице
7. при нажатии на кнопку отрабатывает функция и меняет цитату

ДЗ второе (сложное)
Реализовать квиз с вопросами

1. Импортировать вопросы в файл
2. Занести в состояние
3. При нажатии на нужный инпут сохранять вопросы в отдельный объект с ответами пользователя
4. В конце теста у вас есть все ответы
5. Реализовать функцию, которая считает количество правильных ответов
6. При нажатии на кнопку "узнать результат" отображаем результат на странице

7/10
// Создать TodoList
// импортировать его в App
// Импоритирует Todo в TodoList
// todos из todo.js в TodoList
// отрисовать через map Todo в листе
// прокинуть пропс key

23.01
// новая переменная newPostList
// пройтись по массиву объектов postList --> map (возвращает новый массив)
// используем тернарный оператор
// если id елемента совпадает с id (передается в функцию)
// то свойство marked поменяй на противоположное
// {...post, marked: !post.marked}
// если не совпадают верни тот же объект
// в setPostList мы добавляем новый массив т.е. изменяем состояние

// Первое задание
// создаем useState
// заносим todo из внешнего файла в состояние todoList
// в компоненте TODO добавляем кнопку
// изменяет переменную doneFlag
// прокидываем в функцию changeDoneFlag id
// добавляем id и changeDoneFlag в пропсы
// функцию прокидываем в пропсы в компоненте Todo
// реализовываем функцию, кот изменяет doneFlag

Второе задание
// Создать форму как в addNewPost -
// Скопировать форму и изменить поля
// поменять useState как в массиве todo
// добавить обработчик события на submit
// реализовать в todolist добавление в массив данных

// используются внутри ФУНКЦИОНАЛЬНОГО компонента
// используются на верхнем уровне
// не используется внутри циклов, условных операторов и тд.
// все хуки нач с use

// useEffect() - два параметра
// первый параметр - колбек функция
// второй параметр - массив зависимостей

// если НЕТ массива зависимостей([] второй параметр)
// то useEffect отрабатывает на КАЖДОМ рендере комопнента
useEffect(() => console.log('I AM EVERY RENDER'))
// Если второй аргумент ПУСТОЙ массив, то отрабатывает один раз на поднятии компонента
useEffect(() => console.log('I AM ON MOUNT'), [])
useEffect(() => console.log(`I only change with ${color}`), [color])

useEffect(() => console.log('I AM EVERY RENDER'))
useEffect(() => console.log('I AM ON MOUNT'), [])
useEffect(() => console.log(`I only change with ${color}`), [color])
useEffect(() => console.log(`I only change with ${count}`), [count])
useEffect(() => console.log(`I only change with ${count} and ${color}`), [count, color])

// useEffect, переменная в массиве зависимостей postList
// JSON.stringify() - переводи в JSON
// JSON.parse() - из json обратно в массив
// при инициализации добавить с state
// если LS пустой то занести posts из массива ??
// если null/undefined то примени это --> ??

ДЗ первое(простое)
Создать приложение с рецептами
используем следующий запрос
fetch('https://dummyjson.com/recipes/1')

1. создаем функцию, которая фетчит рецепт рецепт по айди
2. создать компонент который отрисовывает данные рецепта
3. выводить все данные на экран
4. добавить две кнопки, которые позволяют переключаться между рецептами

ДЗ второе (сложное на подумать)
используем API погоды:
https://openweathermap.org/api/

можно использовать в качестве шаблона вот этот дизайн(можно выбрать свой собственный)
https://www.figma.com/file/7bmKyuBgUDx5hdJjaKLMQI/Weather-Web-Design-%7C-App-UI-(Community)?node-id=1%3A3107&mode=dev

1. необходимо зарегистрироваться, получить токен для отправки запросов
2. найти необходимую информацию в API, которая позволит получать информацию о погоде по городу!
3. выводим информацию о погоде на экран
4. в инпуте можно ввести название города и его погода выводится на экран

// создадим форму
// в эту форму вводим данные пользователя
// форма отправляет запрос на сервер
// POST обработать запрос

// useForm
// как упростить работу с формой и ее валидацией

// Routing создать отдельные страницы на сайте

// useContext - rounter + userForm // управление сайтом в зависимости от роли
// пользователь /админ

const user1 = {
name: 'peter',
adress: 'Stockgolm',
}

const user2 = {
name: 'Michelle',
adress: undefined,
}
console.log(user2?.adress)
const userArray = [user1, user2]
userArray()

 <p>{errors.firstName?.message}</p>
 // если ошибки нет то first не существует
 // пытаемся получить message у undefined
 // он выбрасывает ошибку

// если есть опертор опциального слияния
// если firstName нет, то тогда ошибки не будет

// если firstName есть то мы получаем у него значение message

// создать новое поле с возрастом age
// добавить в него валидацию если возраст меньше 18
// выводим на экран ошибку - пользовательдолжен быть старше 18

// Локальное состояние - местное (ограниченное) - область видимости компонента
// useState() = используй состояние
const [value, setValue] = useState()
состояние напрямую менять нельзя!
мы используем ФУКНЦИЯ setValue - изменяет состояние и вызывает ререндеринг
// Изменение состояния --> ререндеринг компонета

// Глобальное состояние - REDUX
// мы можем в хранилище все изменения на проекте
// boilerplate (заготовка)- надо написать много кода, чтобы все это заработала

function reducer(state, action) {
if (action.type === 'INCREASE') {
return {
...state,
counter: (state.counter += 1),
}
} else if (action.type === 'DECREASE') {
return {
...state,
counter: (state.counter -= 1),
}
} else if ('third condition') {
} else {
return state
}
}

// ВСЕГДА ВОВЗРАЩАЕТ СОСТОЯНИЕ
export const counterReducer = (state = initialState, action) => {
// if else ternary switch - выполняют одни и те же функции
// switch помогает улучшить читаемость
// проще понять, что в свитче, когда у нас много условий
// action.type
// {type: "INCREASE"}
// когда мы отправляем в reducer наш action
// у action всегда есть тип, поэтому мы смотрим на тип
// в зависимости от этого типа мы изменяем наше состояние
switch (action.type) {
// action.type === "INCREASE" = case "INCREASE"
case 'INCREASE':
return {
...state,
counter: (state.counter += 1),
}
default:
return state
}
}

const counter = {
counter: 1,
}

{...counter, counter: counter.counter+=1 }

store.counter.counter --> 0
const store = {
counter: {
counter: 0,
},
todos: [
{
id: '1',
taskTitle: 'Task 1',
taskDescription: 'Complete project presentation',
doneFlag: false,
},
{
id: '2',
taskTitle: 'Task 2',
taskDescription: 'Buy groceries',
doneFlag: true,
},
],
}

// payload - нагрузка или какая-то информация
// ддоп данные кот перадаются в экшене
// payload - объект(пользователь, продукт, цвет, и тд), строка, число

1. создаем файл colorSlice.js
2. import createSlice
3. создать initialState {color: #ffffff}
4. создать colorSlice --> createSlice
5. реализовать action ChangeColor который будет изменять цвет на рандомный
6. второй action resetColor сбрасывает на дефолтный #ffffff

10) экспортировать actions
11) экспортировать reducer
12) добавить слайс в редьюсер

// THEME SLICE

3. создать initialState "light" (строка)
4. создать slice
5. добавить в slice имя, состояние, reducers

RTK query

ДО этого:
добавляем фетч запрос в useEffect
добавляет state для ошибки и загрузки

все запросы в разных частях приложения

создавать доп инструменты для подтягивания и обновления данных

мы хотим
написать запрос и иметь доступ к встроенным методам isError, isSuccessfull, isLoading
храни все запросы в одном месте
при отработке пост запросов мы можем автоматически данные подтянуть
кеширование запросов - хранит несколько минут результат запроса на сервер

// builder - объект с МЕТОДАМИ
// query метод объекта builder кот позволяет сделать гет запрос

const builder = {
query: async (baseUrl, queryUrl) => {
try {
await fetch(baseUrl+ queryUrl)
} catch {

        }
        return data, isError, isLoading etc
    },
    mutation: {

    }

}

до RTK query
