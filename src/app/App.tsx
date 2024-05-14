import './index.sass'
import { AppRouter } from './providers/router'
import classNames from '@/shared/lib/helpers/classNames'
import { PSuspense } from './providers/Suspense'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import AnimateOpacity from '@/shared/ui/animations/AnimateOpacity/AnimateOpacity'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <PSuspense>
        <AnimateOpacity>
          <AppRouter />
        </AnimateOpacity>
      </PSuspense>
    </div>
  )
}

export default App
