import './index.sass'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widget/Navbar'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])} >
      <button onClick={toggleTheme}> toggleTheme </button>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
