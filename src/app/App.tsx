import './index.sass'
import { AppRouter } from './providers/router'
import classNames from '@/shared/lib/helpers/classNames'
import { PSuspense } from './providers/Suspense'
import { useTheme } from '@/shared/lib/hooks/useTheme'
import AnimateComponent from '@/shared/ui/animations/AnimateComponent/AnimateComponent'

function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <PSuspense>
        <AnimateComponent>
          <AppRouter />
        </AnimateComponent>
      </PSuspense>
    </div>
  )
}

export default App
