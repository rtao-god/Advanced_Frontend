import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './providers/ThemeProvider'
import { StoreProvider } from './providers/StoreProvider'
import { Theme } from './providers/ThemeProvider/lib/ThemeContext'
import { ErrorBoundary } from 'react-error-boundary'
import './styles/_include.scss'
import { ErrorBoundaryFallback } from '@/widgets/components'

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <StoreProvider>
            <BrowserRouter>
                <ThemeProvider initialTheme={Theme.DARK}>
                    <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
                        <App />
                    </ErrorBoundary>
                </ThemeProvider>
            </BrowserRouter>
        </StoreProvider>
    )
} else {
    console.error('Root element not found')
}
