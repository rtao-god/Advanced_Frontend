import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import '../shared/config/i18n/i18n'
import { ErrorBoundary } from './providers/ErrorBoundary'
import { StoreProvider } from './providers/StoreProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { makeServer } from '@/mirage/server'

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </StoreProvider>
)
