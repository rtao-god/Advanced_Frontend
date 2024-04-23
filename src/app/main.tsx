import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import '../shared/config/i18n/i18n'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { StoreProvider } from './providers/StoreProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
