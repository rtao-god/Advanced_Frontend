import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    let currentTheme = theme
    if (!currentTheme) {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
        if (storedTheme) {
            currentTheme = storedTheme as Theme
        } else {
            currentTheme = Theme.LIGHT
        }
    }

    return {
        theme: currentTheme,
        toggleTheme
    }
}
