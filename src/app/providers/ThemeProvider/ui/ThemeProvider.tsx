import { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null
const defaultTheme = storedTheme ?? Theme.LIGHT

interface ThemeProviderProps {
    children?: ReactNode
    initialTheme?: Theme
}

export default function ThemeProvider({ children, initialTheme = defaultTheme }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    const value = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
