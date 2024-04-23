import './index.sass'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from '@/widget/'
import { Suspense } from 'react'
import { Loader } from '@/widget/Loader'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import classNames from '@/shared/lib/helpers/classNames'

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
