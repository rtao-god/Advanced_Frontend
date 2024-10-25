import { useContext, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/app/providers/ThemeProvider/lib/ThemeContext'

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
        if (storedTheme && storedTheme !== theme) {
            setTheme?.(storedTheme)
        }
    }, [])

    return {
        theme: theme ?? Theme.DARK,
        toggleTheme
    }
}
