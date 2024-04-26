import './index.sass'
import { AppRouter } from './providers/router'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import classNames from '@/shared/lib/helpers/classNames'
import { PSuspense } from './providers/Suspense'
import LoginPage from '@/pages/LoginPage/LoginPage'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <PSuspense>
        <AnimatePresence initial={true}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AppRouter />
          </motion.div>
        </AnimatePresence>
      </PSuspense>
    </div>
  )
}

export default App
