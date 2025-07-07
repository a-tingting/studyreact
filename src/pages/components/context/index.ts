import { createContext } from 'react'

const ThemeContext = createContext<any>({
    theme: 'light',
    setTheme: () => {},
})
export default ThemeContext
