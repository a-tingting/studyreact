import React, { useContext } from 'react'
import ThemeContext from '../context'

export default function Child03() {
    const { theme, setTheme }: any = useContext(ThemeContext)

    return (
        <button
            style={{ background: theme === 'dark' ? '#333' : '#FFF' }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            切换主题
        </button>
    )
}
