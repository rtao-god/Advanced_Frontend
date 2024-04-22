import './index.sass'
import classNames from '@/shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from '@/widget/'
import { Suspense } from 'react'
import { Loader } from '@/widget/Loader'
import { useTheme } from '@/shared/hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content_page">
          <Sidebar />
          <div className="page_wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
