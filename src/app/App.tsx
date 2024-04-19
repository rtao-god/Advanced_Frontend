import { useState } from 'react'
import './index.sass'

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK )
  }
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> toggleTheme </button>
      <p>lol</p>
    </div>
  )
}

export default App
