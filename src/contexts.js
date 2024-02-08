import { createContext } from 'react'

export const PostsContext = createContext({})

// создать новый контекст для темы нашего приложения
// ThemeContext "dark" - дефолтное значение
export const ThemeContext = createContext('dark')

// export const AnotherContext = createContext('')
