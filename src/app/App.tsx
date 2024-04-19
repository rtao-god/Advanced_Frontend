import { Route, Routes } from 'react-router-dom'
import './index.sass'
import { useTheme } from '@/hooks/useTheme'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { MainPageAsync } from '@/pages/MainPage/MainPage.async'
import { AboutPageAsync } from '@/pages/AboutPage/AboutPage.async'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}> toggleTheme </button>
      <Link to='/'> MainPage </Link>
      <Link to='about'> AboutPage </Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
