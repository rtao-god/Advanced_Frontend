import { lazy } from 'react'
import { RouteProps } from 'react-router'

const MainPage = lazy(() => import('@/pages/MainPage/MainPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage/AboutPage'))
const NotFoundPage = lazy(() => import('@/pages/404Page/NotFoundPage'))

export const routeConfig: RouteProps[] = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    { path: '*', element: <NotFoundPage /> },
]
