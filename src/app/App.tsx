import './index.sass'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from '@/widget/'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()

  function toggle() {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div>
      <button onClick={toggle}> {t('Translate')} </button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading...">
        <Navbar />
        <div className='content_page'>
          <Sidebar />
          <div className='page_wrapper'>
            <AppRouter />
            <MyComponent />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
