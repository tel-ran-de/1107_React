import { DECREASE, INCREASE, INCREASE_BY_VALUE, RESET } from './constants'

const decrease = () => ({ type: DECREASE })
const increase = () => ({ type: INCREASE })
const reset = () => ({ type: RESET })
const increase_by_value = (value) => ({ type: INCREASE_BY_VALUE, payload: value })
// payload - нагрузка или какая-то информация
// ддоп данные кот перадаются в экшене
// payload - объект(пользователь, продукт, цвет, и тд), строка, число
export { decrease, increase, increase_by_value, reset }
