import './index.sass'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from '@/widget/'
import { Suspense, useEffect } from 'react'
import { Loader } from '@/widget/Loader'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className='content_page'>
          <Sidebar />
          <div className='page_wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
