import { useMemo, useState, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import ThemeProviderProps from './types'

const getInitialTheme = (): Theme => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
    return storedTheme ?? Theme.DARK
}

export default function ThemeProvider({ children, initialTheme = getInitialTheme() }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    const value = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
