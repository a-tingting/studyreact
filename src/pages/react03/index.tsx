import React, { useState } from 'react'
import Child03 from '../components/child03'
import ThemeContext from '../components/context'

export default function index() {
    const [theme, setTheme] = useState<any>('dark')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <Child03 />
        </ThemeContext.Provider>
    )
}
