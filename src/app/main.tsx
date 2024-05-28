import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import '../shared/config/i18n/i18n'
import { StoreProvider } from './providers/StoreProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Theme } from './providers/ThemeProvider/lib/ThemeContext'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryFallback from '@/widgets/components/ErrorBoundaryFallback/ErrorBoundaryFallback'
import { makeServer } from '../../mirage/server'
import './index.sass'

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

const queryClient = new QueryClient()
const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <StoreProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ThemeProvider initialTheme={Theme.LIGHT}>
                        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
                            <App />
                        </ErrorBoundary>
                    </ThemeProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </StoreProvider>
    )
} else {
    console.error('Root element not found')
}
